const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const mongoURI = 'mongodb://127.0.0.1:27017/gamestudio'; // Replace with your MongoDB URI

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

// Create the model based on the schema
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


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
