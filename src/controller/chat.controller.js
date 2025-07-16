// src/controllers/chat.controller.js
const ChatService = require('../service/chat.service');
require('dotenv').config();

const DB_SERVICE_URL = process.env.MESSAGE_DB_SERVICE_URL;

const service = new ChatService({ externalUrl: DB_SERVICE_URL });

exports.handleMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const chatbotResponse = await service.postMessage(message);
    const reply = typeof chatbotResponse === 'string' ? chatbotResponse : await service.getDefaultResponse();
    res.json({ reply });

  } catch (err) {
    next(err);
  }
};
