const router = require('express').Router();
const sequelize = require('../../config/connection');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

// using bcrypt to hash password
const bcrypt = require('bcrypt')

const authenticateToken = require('../../jwt')






router.get('/', authenticateToken, async (req, res) => {
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

    // Hashs password before saving to database
    const salt = await bcrypt.genSalt(10); // Generates a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt

    const newUser = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword // Us the hashed password
    });

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      lastname: newUser.lastname,
      email: newUser.email
    }); 
  } catch (err) {
    console.error('Signup Error:', err);
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).json({ error: 'User already exists with that email' });
    } else {
      res.status(500).json({ error: 'Failed to create user', message: err.message });
    }
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id }, // Payload
      process.env.JWT_SECRET, // Secret key from your environment variables
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    
    res.json({ 
      message: "Login successful", 
      user: { 
        id: user.id, 
        name: user.name 
      },
      token: token  // Sends the token to the client
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
