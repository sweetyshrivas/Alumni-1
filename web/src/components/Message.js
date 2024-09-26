// frontend/src/components/Message.js

import React from 'react';

const Message = ({ text, sender }) => {
    return (
        <div style={{ textAlign: sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{sender === 'user' ? 'You' : 'Bot'}:</strong> {text}</p>
        </div>
    );
};

export default Message;
