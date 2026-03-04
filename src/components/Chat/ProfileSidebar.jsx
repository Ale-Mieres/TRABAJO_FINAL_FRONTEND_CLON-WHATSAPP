import React from 'react';
import { useChats } from '../../context/ChatContext';
import './ProfileSidebar.css';

const ProfileSidebar = ({ chat }) => {
    const { isProfileOpen, setIsProfileOpen } = useChats();

    if (!chat) return null;

    return (
        <div className="profile-sidebar active">
            <div className="profile-header">
                <div className="close-btn-container" onClick={() => setIsProfileOpen(false)}>
                    <i className="bi bi-x-lg close-btn"></i>
                </div>
                <span className="profile-title">Info. del contacto</span>
            </div>

            <div className="profile-content">
                <div className="profile-photo-section">
                    <div className={`profile-avatar ${chat.avatarClass || ''}`}>
                        <img src={chat.avatar} alt={chat.name} />
                    </div>
                    <h2>{chat.name}</h2>
                    <p>{chat.phone}</p>
                </div>

                <div className="profile-info-section">
                    <div className="info-block">
                        <label>Bio</label>
                        <p>{chat.bio || "Sin descripción"}</p>
                    </div>

                    <div className="info-block">
                        <label>Estado</label>
                        <p className="status-text">{chat.status || "Disponible"}</p>
                    </div>
                </div>

                <div className="profile-actions">
                    <div className="action-item danger">
                        <i className="bi bi-slash-circle"></i>
                        <span>Bloquear a {chat.name}</span>
                    </div>
                    <div className="action-item danger">
                        <i className="bi bi-hand-thumbs-down"></i>
                        <span>Reportar a {chat.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
