const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Employer  = require('../models/employer');

//get jobs
router.get('/jobs', async (req, res) => {
    try {
      const job = await Job.find();
      if (!job) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(job);
    }
    catch (error) {
      console.error('Error getting job:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
   //get employer
  router.get('/employers', async (req, res) => {
    try {
      const employer = await Employer.find();
      if (!employer) {
        return res.status(404).json({ message: 'Employer not found' });
      }
      res.json(employer);
    } catch (error) {
      console.error('Error getting Employer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Post job 
  router.post('/post-job', async (req, res) => {
    try {
      let newJob = new Job(req.body);
  
      // Asynchronously save the job
      let result = await newJob.save();
  
      // Send the result as a response
      res.send({success:true, message: 'Job successfully created', result});
    } catch (error) {
      console.error('Error saving job:', error);
      // Send an error response to the client
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Search route
  router.get('/search', async (req, res) => {
    try {
      const { q } = req.query;
  
      // making case-insensitive search
      const regex = new RegExp(`.*${q}.*`, 'i');
  
      const searchedJobs = await Job.find({ jobTitle: regex });
      console.log(searchedJobs)
      res.json({ searchedJobs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Export the router
module.exports = router;