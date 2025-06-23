// index.js
const express = require('express');
const app = express();

app.use(express.json());

const VALID_KEYS = ['BACKEND-1234', 'FRONTEND-KEY-5678']; // Add your allowed keys here

app.post('/validate', (req, res) => {
  const { key } = req.body;
  const isValid = VALID_KEYS.includes(key);
  res.json({ valid: isValid });
});

module.exports = app;
