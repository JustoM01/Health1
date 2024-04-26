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

module.exports = router;
