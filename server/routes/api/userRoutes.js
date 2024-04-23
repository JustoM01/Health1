const router = require('express').Router();
const sequelize = require('../../config/connection');
const User = require('../../models/User');


router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({});
    return res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
});








module.exports = router;
