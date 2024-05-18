const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Create the db directory if it doesn't exist
const dbDirectory = path.resolve(__dirname, 'db');
if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory);
}

// Initialize the SQLite database
const db = new sqlite3.Database(path.join(dbDirectory, 'smart-todo.db'));

const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT,
    priority INTEGER,
    deadline TEXT,
    completed BOOLEAN NOT NULL CHECK (completed IN (0, 1)),
    FOREIGN KEY (userId) REFERENCES users(id)
  )`);
};

createTables();

module.exports = {db};