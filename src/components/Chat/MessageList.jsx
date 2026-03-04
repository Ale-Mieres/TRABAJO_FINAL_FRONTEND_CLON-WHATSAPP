import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="messages-list">
            <div className="message-date-container">
                <div className="message-date-bubble">HOY</div>
            </div>
            {messages.map(msg => (
                <div key={msg.id} className={`message ${msg.type === 'sent' ? 'message-sent' : 'message-received'}`}>
                    <div className="message-content">
                        <span className="message-text">{msg.text}</span>
                        <div className="message-info">
                            <span className="message-time">{msg.time}</span>
                            {msg.type === 'sent' && <i className="bi bi-check2-all message-checks"></i>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
