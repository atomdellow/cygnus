// routes/contactRoutes.js

const express = require('express');
const ContactMessage = require('../models/contact.js');

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { email, name, message } = req.body;

    // Create a new message
    const contactMessage = new ContactMessage({
      email,
      name,
      message
    });

    // Save the message to the database
    await contactMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error saving the message:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
