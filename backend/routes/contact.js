const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// POST /api/contact - Create a new contact message and send email notification
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // 1. Save to Database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // 2. Send Email Notification
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // Use STARTTLS
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
                tls: {
                    rejectUnauthorized: false // Helps in some local environments
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'kirtisidhu03@gmail.com',
                subject: `New Portfolio Message from ${name}`,
                text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (mailError) {
            console.error('Email failed to send, but message was saved to database:', mailError.message);
        }

        res.status(201).json({ message: 'Message received successfully!' });
    } catch (err) {
        console.error('Critical error in contact route:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
