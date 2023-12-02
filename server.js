// Load environment variables from .env file
// require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
// const Job = require('./models/job');
const cors =require('cors');
// const Employer  = require('./models/employer');

const app = express();
const PORT = process.env.PORT || 3000;

// giving cors permission to all devices req 
// cors middeleware 
// const corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };

app.use(cors());

// To see from where request is comming 
app.use((req, res, next) => {
  console.log('Request Origin:', req.headers.origin);
  next();
});

// Connecting with Mongo DB Atlas 
// const url = process.env.MONGO_URI;
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB Atlas');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB Atlas:', error);
// });

// Middeleware 
app.use(express.json());

// #####################
// Routes End Points
// #####################
// say hello 
app.get('/', (req, res) => {
  res.send('Hello from Server!');
  console.log('Connection successful');
});

//get jobs
// app.get('/api/jobs', async (req, res) => {
//   try {
//     const job = await Job.find();
//     if (!job) {
//       return res.status(404).json({ message: 'Note not found' });
//     }
//     res.json(job);
//   } catch (error) {
//     console.error('Error getting job:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// //get random jobs 
// // app.get('/api/jobs', async (req, res) => {
// //   try {
// //     const job = await Job.find();
// //     if (!job) {
// //       return res.status(404).json({ message: 'Note not found' });
// //     }
// //     res.json(job);
// //   } catch (error) {
// //     console.error('Error getting job:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// //get employer
// app.get('/api/employers', async (req, res) => {
//   try {
//     const employer = await Employer.find();
//     if (!employer) {
//       return res.status(404).json({ message: 'Employer not found' });
//     }
//     res.json(employer);
//   } catch (error) {
//     console.error('Error getting Employer:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Post job 
// app.post('/api/post-job', async (req, res) => {
//   try {
//     let newJob = new Job(req.body);

//     // Asynchronously save the job
//     let result = await newJob.save();

//     // Send the result as a response
//     res.send({success:true, message: 'Job successfully created', result});
//   } catch (error) {
//     console.error('Error saving job:', error);
//     // Send an error response to the client
//     res.status(500).send({success: false, error: 'Internal Server Error' });
//   }
// });

// // Search route
// app.get('/api/search', async (req, res) => {
//   try {
//     const { q } = req.query;

//     // making case-insensitive search
//     const regex = new RegExp(`.*${q}.*`, 'i');

//     const searchedJobs = await Job.find({ jobTitle: regex });
//     console.log(searchedJobs)
//     res.json({ searchedJobs });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Port 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// This is required for Vercel to recognize your app as a serverless function
module.exports = app;