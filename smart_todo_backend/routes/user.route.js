require("dotenv").config()
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {db} = require('../config/database');
const userRouter = express.Router();

const secretKey = process.env.SECRET;

// Signup route
userRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], function (err) {
    if (err) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const token = jwt.sign({ id: this.lastID }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Login route
userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
    if (err || !user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = {userRouter};