
require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // Bearer Token

    if (token == null) return res.sendStatus(401);  // if theres No token, sends unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);  // Invalid token
        req.user = user;
        next();  // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateToken;
