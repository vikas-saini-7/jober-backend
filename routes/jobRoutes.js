// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Define user-related routes
router.get('/users', (req, res) => {
  // Handle the route logic
  res.send('User List');
});

router.get('/users/:id', (req, res) => {
  // Handle the route logic for getting a specific user
  res.send(`User ID: ${req.params.id}`);
});

// Export the router
module.exports = router;
