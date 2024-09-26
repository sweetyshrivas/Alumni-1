// frontend/src/components/Chatbot.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/chatbot/history');
                setMessages(response.data);
            } catch (error) {
                console.error("Error fetching chat history:", error);
            }
        };
        fetchChatHistory();
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input) return;

        setMessages((prev) => [...prev, { userMessage: input, botResponse: '', sender: 'user' }]);
        try {
            const response = await axios.post('http://localhost:5000/api/chatbot/chat', { message: input });
            setMessages((prev) => [...prev, { userMessage: input, botResponse: response.data.reply, sender: 'bot' }]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
        setInput('');
    };

    return (
        <div>
            <h2>Chatbot</h2>
            <div>
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.sender === 'user' ? msg.userMessage : msg.botResponse} sender={msg.sender} />
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;



