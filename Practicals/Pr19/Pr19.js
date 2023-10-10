// Create Email sendning Page which contains To, From, CC, BCC, Subject and
// Message body field.
// Note:
// • Explore How send email with attachments
// • Create and apply email template before sending email


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;


// Middleware for parsing JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Setup Nodemailer with your email service provider's SMTP details
const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // Example: 'Gmail'
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword',
  },
});


// Serve a simple HTML form for email sending
app.get('/', (req, res) => {
  res.send(`
    <h1>Email Sending Page</h1>
    <form method="POST" action="/send">
      <label for="to">To:</label>
      <input type="email" name="to" required><br>
      <label for="from">From:</label>
      <input type="email" name="from" required><br>
      <label for="cc">CC:</label>
      <input type="email" name="cc"><br>
      <label for="bcc">BCC:</label>
      <input type="email" name="bcc"><br>
      <label for="subject">Subject:</label>
      <input type="text" name="subject" required><br>
      <label for="message">Message:</label>
      <textarea name="message" rows="4" cols="50" required></textarea><br>
      <button type="submit">Send Email</button>
    </form>
  `);
});


// Handle POST request to send an email
app.post('/send', (req, res) => {
  const { to, from, cc, bcc, subject, message } = req.body;


  // Create email message
  const mailOptions = {
    from,
    to,
    cc,
    bcc,
    subject,
    text: message,
  };


  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email sending failed. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
