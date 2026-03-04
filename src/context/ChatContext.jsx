import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChats = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChats must be used within a ChatProvider');
    }
    return context;
};

export const ChatProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('user');
            if (!saved || saved === "null" || saved === "undefined") return null;
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing user from localStorage", e);
            return null;
        }
    });


    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.className = theme + '-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const [chats, setChats] = useState([
        {
            id: 1, name: "Heisenberg", lastMessage: "¡Yo soy el que golpea la puerta!", time: "10:35", avatar: "/Walter_White.jpeg",
            status: "Cocinando...", phone: "+505 035-Heisenberg", bio: "Dueño del imperio. Solo el producto más puro del mercado."
        },
        {
            id: 2, name: "Jesse Pinkman", lastMessage: "¡Sí, ciencia, p***!", time: "10:42", avatar: "/jesse_pinkman.jpg",
            status: "¡Sí, ciencia, p***!", phone: "+505 069-CapnCook", bio: "Especialista en distribución. Socio de Heisenberg."
        },
        {
            id: 3, name: "Gustavo Fring", lastMessage: "Me escondo a plena vista...", time: "09:15", avatar: "/gustavo-fring.jpg", avatarClass: "avatar-gus",
            status: "Pollo de primera", phone: "+505 000-Pollos", bio: "Empresario filántropo. Dueño de Los Pollos Hermanos."
        },
        {
            id: 4, name: "Saul Goodman", lastMessage: "¡Mejor llama a Saul!", time: "Ayer", avatar: "/saul_goodman.jpg", avatarClass: "avatar-saul",
            status: "En audiencia", phone: "+505 555-BETTER", bio: "¿Problemas con la ley? ¡Mejor llama a Saul!"
        },
        {
            id: 5, name: "Mike Ehrmantraut", lastMessage: "No más medias tintas.", time: "Ayer", avatar: "/Mike_Ehrmantraut.jpeg",
            status: "Ocupado", phone: "+505 007-FIXER", bio: "No hagas preguntas. No habrá medias tintas."
        },
        {
            id: 6, name: "Hank Schrader", lastMessage: "¡Son minerales, Marie!", time: "Hace 2 días", avatar: "/hank_BB.jpeg",
            status: "En el campo", phone: "+505 911-DEA", bio: "Agente especial de la DEA. Coleccionista de minerales."
        }
    ]);

    const [messages, setMessages] = useState({
        1: [
            { id: 1, text: "Dí mi nombre.", sender: "Heisenberg", time: "10:30", type: "received" },
            { id: 2, text: "Heisenberg.", sender: "Me", time: "10:32", type: "sent" },
            { id: 3, text: "Tienes toda la razón. ¡Yo soy el que golpea la puerta!", sender: "Heisenberg", time: "10:35", type: "received" }
        ],
        2: [
            { id: 1, text: "Oiga Sr. White, ¡alguien toca la puerta!", sender: "Jesse Pinkman", time: "10:40", type: "received" },
            { id: 2, text: "Es solo el correo, Jesse. Concéntrate en la cocina.", sender: "Me", time: "10:41", type: "sent" },
            { id: 3, text: "¡Sí, ciencia, p***!", sender: "Jesse Pinkman", time: "10:42", type: "received" }
        ],
        3: [
            { id: 1, text: "Me escondo a plena vista, igual que tú.", sender: "Gustavo Fring", time: "09:10", type: "received" },
            { id: 2, text: "¿Está listo el producto?", sender: "Me", time: "09:12", type: "sent" },
            { id: 3, text: "Un hombre provee. Incluso cuando no es apreciado, provee.", sender: "Gustavo Fring", time: "09:15", type: "received" }
        ],
        4: [
            { id: 1, text: "Si bebes no conduzcas, pero si lo haces, llámame.", sender: "Saul Goodman", time: "Ayer", type: "received" },
            { id: 2, text: "Necesito un abogado 'criminal'.", sender: "Me", time: "Ayer", type: "sent" },
            { id: 3, text: "¡Mejor llama a Saul!", sender: "Saul Goodman", time: "Ayer", type: "received" }
        ],
        5: [
            { id: 1, text: "Te he visto antes. Eres el que...", sender: "Mike Ehrmantraut", time: "Ayer", type: "received" },
            { id: 2, text: "Hice lo que tuve que hacer.", sender: "Me", time: "Ayer", type: "sent" },
            { id: 3, text: "No más medias tintas, Walter.", sender: "Mike Ehrmantraut", time: "Ayer", type: "received" }
        ],
        6: [
            { id: 1, text: "Mira estas rocas nuevas que conseguí.", sender: "Hank Schrader", time: "Hace 2 días", type: "received" },
            { id: 2, text: "Lindas rocas, Hank.", sender: "Me", time: "Hace 2 días", type: "sent" },
            { id: 3, text: "¡Por Dios, Marie! ¡Son minerales!", sender: "Hank Schrader", time: "Hace 2 días", type: "received" }
        ]
    });

    const sendMessage = (chatId, text) => {
        const newMessage = {
            id: Date.now(),
            text,
            sender: "Me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "sent"
        };

        setMessages(prev => ({
            ...prev,
            [chatId]: [...(prev[chatId] || []), newMessage]
        }));

        setChats(prev => prev.map(chat =>
            chat.id === chatId
                ? { ...chat, lastMessage: text, time: "Ahora" }
                : chat
        ));
    };

    const login = (userData) => {
        const defaultProfile = {
            name: "Heisenberg",
            avatar: "/Walter_White.jpeg",
            status: "En la escuela",
            bio: "Profesor de química en JP Wynne. La química es el estudio del cambio."
        };
        const newUser = { ...defaultProfile, ...userData };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = (newData) => {
        setUser(prev => {
            const updated = { ...prev, ...newData };
            localStorage.setItem('user', JSON.stringify(updated));
            return updated;
        });
    };

    const value = {
        user,
        login,
        logout,
        updateProfile,
        chats,
        messages,
        sendMessage,
        isProfileOpen,
        setIsProfileOpen,
        isMyProfileOpen,
        setIsMyProfileOpen,
        theme,
        toggleTheme
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
