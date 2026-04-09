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
    const {
      SENDGRID_API_KEY,
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      SENDGRID_FROM_EMAIL
    } = process.env;

    if (!SENDGRID_API_KEY) throw new Error('Missing SENDGRID_API_KEY');
    if (!SUPABASE_URL) throw new Error('Missing SUPABASE_URL');
    if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');

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

    console.log('Downloading PDF from Supabase Storage...');
    const { data, error: downloadError } = await supabase.storage
      .from(bucketName)
      .download(filePath);

    if (downloadError) {
      console.error('Supabase Download Error:', downloadError);
      throw new Error(`Supabase Download Failed: ${downloadError.message}`);
    }

    // 3. Convert to Base64 for SendGrid
    console.log('Converting file to Base64...');
    const arrayBuffer = await data.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Attachment = buffer.toString('base64');

    // 4. Define Sender
    const fromEmail = SENDGRID_FROM_EMAIL || 'info@autom8ionlab.com';
    console.log(`Using sender email: ${fromEmail}`);

    // 5. Construct Lead Email
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

    // 6. Construct Admin Notification
    const adminEmail = {
      to: 'admin@autom8ionlab.com',
      from: fromEmail,
      subject: 'New Lead: Capabilities Statement Requested',
      text: `A new lead has requested the Capabilities Statement.\n\nName: ${name}\nEmail: ${email}\n\nThis lead has been sent the PDF attachment via SendGrid.`,
    };

    // 7. Send Emails
    console.log('Dispatching emails via SendGrid...');
    await sgMail.sendMultiple([leadEmail, adminEmail]);
    console.log('Emails dispatched successfully.');

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Emails sent successfully' })
    };
  } catch (error) {
    console.error('Webhook function error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        details: 'Check Netlify function logs for more information.'
      })
    };
  }
};
