import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useChats } from '../../context/ChatContext';
import { useChatNavigation } from '../../hooks/useChatNavigation';
import MessageList from './MessageList';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import ProfileSidebar from './ProfileSidebar';
import './Chat.css';

const ChatView = () => {
    const { chatId } = useParams();
    const { chats, messages, sendMessage, isProfileOpen } = useChats();
    const { goBack } = useChatNavigation();

    const chat = chats.find(c => c.id === parseInt(chatId));

    if (!chat) {
        return <Navigate to="/" />;
    }

    const chatMessages = messages[chatId] || [];

    const handleSendMessage = (text) => {
        sendMessage(parseInt(chatId), text);
    };

    return (
        <div className="chat-view-container">
            {!isProfileOpen ? (
                <div className="chat-view">
                    <ChatHeader chat={chat} onBack={goBack} />
                    <MessageList messages={chatMessages} />
                    <MessageInput onSend={handleSendMessage} />
                </div>
            ) : (
                <ProfileSidebar chat={chat} />
            )}
        </div>
    );
};

export default ChatView;
