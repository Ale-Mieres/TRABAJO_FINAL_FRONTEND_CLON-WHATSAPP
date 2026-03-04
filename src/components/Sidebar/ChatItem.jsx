import React from 'react';
import { useChatNavigation } from '../../hooks/useChatNavigation';

const ChatItem = ({ chat }) => {
    const { openChat } = useChatNavigation();


    return (
        <div className="chat-item" onClick={() => openChat(chat.id)}>
            <div className={`avatar ${chat.avatarClass || ''}`}>
                <img src={chat.avatar} alt={chat.name} />
            </div>
            <div className="chat-info">
                <div className="chat-info-v2">
                    <div className="chat-name">{chat.name}</div>
                    <div className="chat-time">{chat.time}</div>
                </div>
                <div className="chat-last-message-container">
                    <div className="chat-last-message">
                        <i className="bi bi-check2-all blue-checks"></i>
                        {chat.lastMessage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
