const sgMail = require('@sendgrid/mail');
const { createClient } = require('@supabase/supabase-js');

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email } = JSON.parse(event.body);

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' })
      };
    }

    // 1. Fetch the PDF from Supabase Storage
    const bucketName = 'capabilities-statements';
    const filePath = 'Autom8ion_Lab_Capabilities_Statement.pdf';

    const { data, error: downloadError } = await supabase.storage
      .from(bucketName)
      .download(filePath);

    if (downloadError) {
      console.error('Supabase Download Error:', downloadError);
      throw new Error('Could not retrieve capabilities statement');
    }

    // 2. Convert to Base64 for SendGrid
    const arrayBuffer = await data.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Attachment = buffer.toString('base64');

    // 3. Define Sender (Must be verified in SendGrid)
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'info@autom8ionlab.com';

    // 4. Construct Lead Email
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

    // 5. Construct Admin Notification
    const adminEmail = {
      to: 'admin@autom8ionlab.com',
      from: fromEmail,
      subject: 'New Lead: Capabilities Statement Requested',
      text: `A new lead has requested the Capabilities Statement.\n\nName: ${name}\nEmail: ${email}\n\nThis lead has been sent the PDF attachment via SendGrid.`,
    };

    // 6. Send Emails
    await sgMail.sendMultiple([leadEmail, adminEmail]);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Emails sent successfully' })
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
