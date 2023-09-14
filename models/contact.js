// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: String,
    name: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
