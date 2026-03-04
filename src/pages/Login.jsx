import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChats } from '../context/ChatContext';
import logo from '../assets/logo-bb.svg';
import background from '../assets/background.jpg';
import SplashScreen from '../components/Shared/SplashScreen';
import './Login.css';

const Login = () => {
    const [status, setStatus] = useState('form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, user } = useChats();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && status !== 'entering') {
            setStatus('entering');
        }
    }, [user, status]);

    const handleEnteringComplete = () => {
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const trimmedUser = username.trim();
        const trimmedPass = password.trim();

        // Validamos que no estén vacíos y que solo contengan letras/números/símbolos
        if (trimmedUser && trimmedPass) {
            setIsSubmitting(true);
            login({ name: trimmedUser });
            setStatus('entering');
        } else {
            alert("⚠️ Acceso denegado: El nombre de usuario y la contraseña no pueden estar vacíos ni contener solo espacios.");
        }
    };

    if (status === 'entering') {
        return <SplashScreen onComplete={handleEnteringComplete} message="Entrando al laboratorio..." />;
    }

    return (
        <div className="login-page-bb" style={{ backgroundImage: `url(${background})` }}>
            <div className="splash-overlay"></div>
            <div className="login-card-bb fade-in">
                <img src={logo} alt="Breaking wpp" className="login-logo-bb" />
                <h2>Inicia sesión en <span>Breaking wpp</span></h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        ENTRAR AL LABORATORIO
                    </button>
                    <p className="login-footer-text">Solo química pura.</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
