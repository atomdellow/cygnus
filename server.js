const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/gameStudio', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Routes would be added here

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
