require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const connectToDatabase = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

// #####################
// Routes End Points
// #####################

// say hello 
app.get('/', (req, res) => {
  res.send('Hello from Server!');
  console.log('Connection successful');
});
// other routes 
const jobRoutes = require('./routes/jobRoutes');

// ##################
// MiddleWares
// ##################

// cross browser 
app.use(cors());

// Use routes
app.use('/api', jobRoutes);

// json
app.use(express.json());


// #####################
// Connection made to MongoDB Atlas
// #####################

connectToDatabase();


// Port 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;