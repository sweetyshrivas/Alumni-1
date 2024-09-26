// backend/routes/chatbotRoutes.js

const express = require('express');
const { getResponse, getChatHistory } = require('../controllers/chatbotController');
const router = express.Router();

router.post('/chat', getResponse);
router.get('/history', getChatHistory);  // New route for getting chat history

module.exports = router;
