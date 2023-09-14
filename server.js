const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const ContactMessage = require('./models/contact');
const app = express();
//app.use('/', contactRoutes);  // Use the routes from contactRoutes.js
const mongoURI = 'mongodb://127.0.0.1:27017/gamestudio'; // Replace with your MongoDB URI
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// mongoose.connect('mongodb://localhost:27017/gameStudio', { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Successfully connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with a failure code
    }
  };
  
connectDB();

const BoxingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

// Create the model based on the Boxer schema
const Boxer = mongoose.model('Boxer', BoxingSchema);

app.use(cors());
app.use(express.json());

// Routes would be added here

app.post('/add-boxer', async (req, res) => {
  try {
    const { name, rank } = req.body;
    const boxer = new Boxer({
      name,
      rank
    });
    await boxer.save();
    res.status(201).json({ message: 'Boxer added!', data: boxer });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Retrieve the leaderboard
app.get('/leaderboard', async (req, res) => {
  try {
    const boxers = await Boxer.find().sort({ rank: 1 }); // Sorting in ascending order by rank
    res.status(200).json(boxers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// const contactSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   message: String,
//   date: { type: Date, default: Date.now }
// });

// const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
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


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
