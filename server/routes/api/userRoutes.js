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




// POST route for user signup
router.post('/signup', async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    

    
    const newUser = await User.create({
      name,
      lastname,
      email,
      password: password
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error('Signup Error:', err);
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).json({ error: 'User already exists with that email' });
    } else {
      res.status(500).json({ error: 'Failed to create user', message: err.message });
    }
  }
});






module.exports = router;
