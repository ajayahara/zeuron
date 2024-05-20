const express = require("express");
const notificationRouter = express.Router();
const { db } = require("../config/database");
const {
  authenticateToken,
} = require("../middleware/authentication.middleware");

const formatDate = (date) => {
  const d = new Date(date);
  const month = "" + (d.getMonth() + 1);
  const day = "" + d.getDate();
  const year = d.getFullYear();
  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
};

notificationRouter.get("/", authenticateToken, (req, res) => {
  const userId = req.user.id;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = formatDate(tomorrow);

  db.all(
    `SELECT * FROM tasks WHERE userId = ? AND completed = 0 AND deadline = ?`,
    [userId, tomorrowFormatted],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const notifications = rows.map(
        (task) => `Your task "${task.title}" deadline is tomorrow.`
      );

      res.status(200).json( notifications );
    }
  );
});

module.exports = { notificationRouter };
