// src/app.js
const express = require('express');
const chatRoute = require('./routes/chat.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/chat', chatRoute);

// centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
