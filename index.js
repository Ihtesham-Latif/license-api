// index.js
const express = require('express');
const app = express();

// ✅ Enable CORS for all routes
app.use((req, res, next) => {
  // Allow requests from any origin (you can restrict this to specific domains)
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Allow specific methods
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  
  // Allow specific headers
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

// ✅ Parse JSON request bodies
app.use(express.json());

// ✅ Define valid keys
const VALID_KEYS = [
  'BACKEND-1234',
  'FRONTEND-KEY-1122'
];

// ✅ POST endpoint to validate key
app.post('/validate', (req, res) => {
  try {
    const { key } = req.body;
    const isValid = VALID_KEYS.includes(key);
    res.status(200).json({ valid: isValid });
  } catch (error) {
    console.error('Error validating key:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Export the Express app for Vercel
module.exports = app;
