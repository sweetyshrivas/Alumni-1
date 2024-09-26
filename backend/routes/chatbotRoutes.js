// routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();

// Sample chatbot logic
router.post('/', (req, res) => {
  const userMessage = req.body.message;

  // Simple example of response logic
  let botResponse = 'I am not sure how to respond to that.';
  if (userMessage.toLowerCase().includes('hello')) {
    botResponse = 'Hello! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    botResponse = 'Sure, I can help you. What do you need?';
  }

  res.json({ reply: botResponse });
});

module.exports = router;