import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSend(text);
            setText("");
        }
    };

    return (
        <form className="chat-input" onSubmit={handleSubmit}>
            <i className="bi bi-emoji-smile icon-btn"></i>
            <i className="bi bi-paperclip icon-btn"></i>
            <input
                type="text"
                className="chat-input-field"
                placeholder="Escribe un mensaje"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {text ? (
                <button type="submit" className="send-btn">
                    <i className="bi bi-send-fill"></i>
                </button>
            ) : (
                <button type="button" className="send-btn">
                    <i className="bi bi-mic-fill"></i>
                </button>
            )}
        </form>
    );
};

export default MessageInput;
