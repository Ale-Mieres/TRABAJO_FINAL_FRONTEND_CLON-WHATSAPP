import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-bb.svg';
import tube from '../../assets/tubo-de-ensayo-para-carga.png';
import background from '../../assets/background.jpg';
import './SplashScreen.css';

const SplashScreen = ({ onComplete, message = "Cocinando..." }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => onComplete && onComplete(), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="splash-screen-bb" style={{ backgroundImage: `url(${background})` }}>
            <div className="splash-overlay"></div>
            <div className="splash-content-bb">
                <img src={logo} alt="Breaking wpp" className="splash-logo-bb pulse" />

                <div className="tube-container">
                    <img src={tube} alt="Test tube" className="tube-image" />
                    <div className="tube-liquid" style={{ height: `${progress}%` }}></div>
                </div>

                <div className="splash-title-bb">Breaking wpp</div>
                <div className="splash-text-bb">
                    <i className="bi bi-radioactive"></i> {message}
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
