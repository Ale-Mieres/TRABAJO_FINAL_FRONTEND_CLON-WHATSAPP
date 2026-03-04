import React from 'react';
import background from '../assets/background.jpg';
import logo from '../assets/logo-bb.svg';

const Welcome = () => {
    return (
        <div className="welcome-container" style={{ backgroundImage: `url(${background})` }}>
            <div className="welcome-content">
                <img src={logo} alt="Breaking Wpp" className="desktop-logo" />
                <h1>Breaking wpp</h1>
                <p>Tu laboratorio de mensajes personal.</p>
                <p>Cocinando conexiones de extremo a extremo.</p>
            </div>
            <div className="welcome-footer" style={{ zIndex: 2 }}>
                <i className="bi bi-lock-fill"></i> Cifrado de extremo a extremo
            </div>
        </div>
    );
};

export default Welcome;
