// index.js
const express = require('express');
const app = express();

// Enable CORS for all routes
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

app.use(express.json());

const VALID_KEYS = [
  'BACKEND-1234', 
  'FRONTEND-KEY-112'  // Updated to match your actual frontend key
]; 

app.post('/validate', (req, res) => {
  const { key } = req.body;
  const isValid = VALID_KEYS.includes(key);
  res.json({ valid: isValid });
});

module.exports = app;
