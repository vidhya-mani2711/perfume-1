// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vidhyavidhya975@gmail.com',
      pass: 'fonz rkrq rlxr jzkd'
    }
  });

  const mailOptions = {
    from: 'vidhyavidhya975@gmail.com',
    to: 'vidhyamani272004@gmail.com',
    subject: 'Thanks for Subscribing!',
    text: `Hi! Thank you for subscribing to our perfume offers. Stay tuned!`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Email failed to send.' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
