import React from 'react';
import { useChats } from '../../context/ChatContext';

const ChatHeader = ({ chat, onBack }) => {
    const { setIsProfileOpen } = useChats();

    return (
        <div className="header">
            <div className="chat-header-left">
                <i className="bi bi-arrow-left back-btn" onClick={onBack}></i>
                <div
                    className={`avatar pointer ${chat.avatarClass || ''}`}
                    onClick={() => setIsProfileOpen(true)}
                >
                    <img src={chat.avatar} alt={chat.name} />
                </div>
                <div
                    className="chat-name-container pointer"
                    onClick={() => setIsProfileOpen(true)}
                >
                    <div className="chat-name">{chat.name}</div>
                    <div className="chat-status">En línea</div>
                </div>
            </div>
            <div className="header-icons">
                <i className="bi bi-search"></i>
                <i className="bi bi-three-dots-vertical" onClick={() => setIsProfileOpen(true)}></i>
            </div>
        </div>
    );
};

export default ChatHeader;
