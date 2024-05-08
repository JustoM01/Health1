const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const  FitnessProfile  = require('../../models/FitnessProfile'); // Adjust this path as necessary

// Route to get fitness profile by user ID
router.get('/:userId', async (req, res) => {
  try {
    const profile = await FitnessProfile.findOne({
      where: { userId: req.params.userId }
    });

    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error("Error fetching fitness profile:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});





// POST route to create a new fitness profile
router.post('/', async (req, res) => {
    // Extract data from request body
    const { userId, age, weight, fitnessGoal } = req.body;
    
    try {
      // Create a new fitness profile in the database
      const newProfile = await FitnessProfile.create({
        userId,
        age,
        weight,
        fitnessGoal
      });
      
      // If successful, send back the newly created profile
      res.status(201).json(newProfile);
    } catch (error) {
      console.error("Error creating fitness profile:", error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  



module.exports = router;
