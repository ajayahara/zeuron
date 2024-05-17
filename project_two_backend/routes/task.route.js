const express = require('express');
const jwt = require('jsonwebtoken');
const {db} = require('../config/database');
const taskRouter = express.Router();

const secretKey = 'your-secret-key';

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Create a new task
taskRouter.post('/', authenticateToken, (req, res) => {
  const { title, description, category, priority, deadline } = req.body;
  const userId = req.user.id;

  db.run(`INSERT INTO tasks (userId, title, description, category, priority, deadline) VALUES (?, ?, ?, ?, ?, ?)`,
    [userId, title, description, category, priority, deadline], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, userId, title, description, category, priority, deadline });
    });
});

// Get all tasks for a user
taskRouter.get('/', authenticateToken, (req, res) => {
  const userId = req.user.id;

  db.all(`SELECT * FROM tasks WHERE userId = ?`, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Update a task
taskRouter.put('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, category, priority, deadline } = req.body;

  db.run(`UPDATE tasks SET title = ?, description = ?, category = ?, priority = ?, deadline = ? WHERE id = ?`,
    [title, description, category, priority, deadline, id], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, title, description, category, priority, deadline });
    });
});

// Delete a task
taskRouter.delete('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM tasks WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

module.exports = {taskRouter};
