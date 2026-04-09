const sgMail = require('@sendgrid/mail');
const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email } = JSON.parse(event.body);
    console.log(`Processing lead: ${name} (${email})`);

    // 1. Validate Environment Variables
    const getEnv = (key) => process.env[key] || process.env[`VITE_${key}`];

    const SENDGRID_API_KEY = getEnv('SENDGRID_API_KEY');
    const SUPABASE_URL = getEnv('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = getEnv('SUPABASE_SERVICE_ROLE_KEY');
    const SENDGRID_FROM_EMAIL = getEnv('SENDGRID_FROM_EMAIL');

    if (!SENDGRID_API_KEY) throw new Error('Missing SENDGRID_API_KEY (or VITE_SENDGRID_API_KEY)');
    if (!SUPABASE_URL) throw new Error('Missing SUPABASE_URL (or VITE_SUPABASE_URL)');
    if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY (or VITE_SUPABASE_SERVICE_ROLE_KEY)');

    // Initialize Clients
    sgMail.setApiKey(SENDGRID_API_KEY);
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }

    // 2. Fetch the PDF from Supabase Storage
    const bucketName = 'capabilities-statements';
    const filePath = 'Autom8ion_Lab_Capabilities_Statement.pdf';
    let base64Attachment;

    try {
      console.log('Downloading PDF from Supabase Storage...');
      const { data, error: downloadError } = await supabase.storage
        .from(bucketName)
        .download(filePath);

      if (downloadError) throw downloadError;

      console.log('Converting file to Base64...');
      const arrayBuffer = await data.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      base64Attachment = buffer.toString('base64');
    } catch (supaError) {
      console.error('Supabase Error:', supaError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `[Supabase Error] ${supaError.message}` })
      };
    }

    // 3. Define Sender (Updated to verified sub-domain)
    const fromEmail = SENDGRID_FROM_EMAIL || 'info@mail.autom8ionlab.com';
    console.log(`Using sender email: ${fromEmail}`);

    // 4. Construct Emails
    const leadEmail = {
      to: email,
      from: fromEmail,
      subject: 'Autom8ion Lab | Capabilities Statement',
      text: `Hi ${name},\n\nThank you for your interest in Autom8ion Lab. Please find our Capabilities Statement attached to this email.\n\nIt provides an overview of how we engineer bespoke AI and automation systems to transform businesses. If you have any questions or would like to discuss a specific project, feel free to reply to this email or book a strategy call on our website.\n\nBest regards,\nThe Autom8ion Lab Team`,
      attachments: [
        {
          content: base64Attachment,
          filename: 'Autom8ion_Lab_Capabilities_Statement.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    };

    const adminEmail = {
      to: 'admin@autom8ionlab.com',
      from: fromEmail,
      subject: 'New Lead: Capabilities Statement Requested',
      text: `A new lead has requested the Capabilities Statement.\n\nName: ${name}\nEmail: ${email}\n\nThis lead has been sent the PDF attachment via SendGrid.`,
    };

    // 5. Send Emails via SendGrid
    try {
      console.log('Dispatching emails via SendGrid...');
      // Use Promise.all to send distinct messages concurrently
      await Promise.all([
        sgMail.send(leadEmail),
        sgMail.send(adminEmail)
      ]);
      console.log('Both emails dispatched successfully.');
    } catch (sgError) {
      console.error('SendGrid Error:', sgError);
      let sgMessage = sgError.message;
      if (sgError.response && sgError.response.body && sgError.response.body.errors) {
        sgMessage = sgError.response.body.errors.map(e => e.message).join(', ');
      }
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `[SendGrid Error] ${sgMessage}` })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Emails sent successfully' })
    };
  } catch (error) {
    console.error('General Webhook Error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
