// src/routes/chat.route.js
const express = require('express');
const { handleMessage } = require('../controller/chat.controller');

const router = express.Router();

router.post('/message', handleMessage);

module.exports = router;
