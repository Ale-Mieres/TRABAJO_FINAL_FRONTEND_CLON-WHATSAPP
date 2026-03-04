import React, { useState } from 'react';
import { useChats } from '../../context/ChatContext';
import './MyProfile.css';

const MyProfile = () => {
    const { user, updateProfile, setIsMyProfileOpen, logout } = useChats();
    const [name, setName] = useState(user?.name || "");
    const [status, setStatus] = useState(user?.status || "");
    const [bio, setBio] = useState(user?.bio || "");
    const [avatar, setAvatar] = useState(user?.avatar || "");

    const handleSave = () => {
        updateProfile({ name, status, bio, avatar });
        setIsMyProfileOpen(false);
    };

    return (
        <div className="my-profile-panel active">
            <div className="my-profile-header">
                <div className="back-btn-container" onClick={() => setIsMyProfileOpen(false)}>
                    <i className="bi bi-arrow-left"></i>
                </div>
                <span>Perfil</span>
            </div>

            <div className="my-profile-content">
                <div className="my-profile-photo-section">
                    <div className="my-profile-avatar">
                        <img src={avatar} alt="My Profile" />
                        <div className="avatar-overlay">
                            <i className="bi bi-camera-fill"></i>
                            <span>CAMBIAR FOTO</span>
                        </div>
                    </div>
                </div>

                <div className="my-profile-edit-section">
                    <div className="edit-block">
                        <label>Tu nombre</label>
                        <div className="input-with-icon">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <i className="bi bi-pencil-fill"></i>
                        </div>
                        <p className="edit-hint">Este no es un nombre de usuario ni un PIN. Este nombre será visible para tus contactos de Breaking wpp.</p>
                    </div>

                    <div className="edit-block">
                        <label>Estado</label>
                        <div className="input-with-icon">
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <i className="bi bi-pencil-fill"></i>
                        </div>
                    </div>

                    <div className="edit-block">
                        <label>Info.</label>
                        <div className="input-with-icon">
                            <input
                                type="text"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                            <i className="bi bi-pencil-fill"></i>
                        </div>
                    </div>

                    <div className="edit-block">
                        <label>URL de imagen de perfil</label>
                        <div className="input-with-icon">
                            <input
                                type="text"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                                placeholder="Pega una URL de imagen aquí"
                            />
                            <i className="bi bi-link-45deg"></i>
                        </div>
                    </div>
                </div>

                <div className="profile-actions">
                    <button className="save-profile-btn" onClick={handleSave}>
                        GUARDAR CAMBIOS
                    </button>
                    <button className="logout-btn-bb" onClick={() => {
                        logout();
                        setIsMyProfileOpen(false);
                    }}>
                        <i className="bi bi-box-arrow-right"></i> SALIR DEL LABORATORIO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
