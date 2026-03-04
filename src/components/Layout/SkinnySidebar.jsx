import React from 'react';
import { useChats } from '../../context/ChatContext';
import './SkinnySidebar.css';

const SkinnySidebar = () => {
    const { user, setIsMyProfileOpen, logout, theme, toggleTheme } = useChats();

    return (
        <div className="skinny-sidebar">
            <div className="skinny-top">
                <div className="skinny-icon active">
                    <i className="bi bi-chat-left-text-fill"></i>
                </div>
                <div
                    className="skinny-icon theme-toggle"
                    onClick={toggleTheme}
                    title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
                >
                    <i className={`bi ${theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
                </div>
                <div className="skinny-icon">
                    <i className="bi bi-broadcast"></i>
                </div>
                <div className="skinny-icon">
                    <i className="bi bi-people"></i>
                </div>
            </div>

            <div className="skinny-bottom">
                <div className="skinny-icon">
                    <i className="bi bi-archive"></i>
                </div>
                <div className="skinny-icon logout-icon" onClick={() => logout()} title="Cerrar Sesión">
                    <i className="bi bi-box-arrow-right"></i>
                </div>
                <div className="skinny-avatar" onClick={() => setIsMyProfileOpen(true)}>
                    <img src={user?.avatar || "https://i.pravatar.cc/150?u=myprofile"} alt="Profile" title="Perfil" />
                </div>
            </div>
        </div>
    );
};

export default SkinnySidebar;
