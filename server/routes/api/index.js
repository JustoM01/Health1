const router = require('express').Router();
const userRoutes = require('./userRoutes');
const FitnessProfileRoutes = require('./FitnessProfileRoutes')

// Prefix all routes defined in `userRoutes.js` now making it /api/user after prefixing the api folder
router.use('/user', userRoutes);
router.use('/profile', FitnessProfileRoutes)



module.exports = router;
