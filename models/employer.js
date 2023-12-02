
const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  totalJobsPosted: {
    type: Number,
    required: true,
  },
  companySize: {
    type: String,
    required: true,
  },
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
