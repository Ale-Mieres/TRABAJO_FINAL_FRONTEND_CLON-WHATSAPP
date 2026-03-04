import React, { useState } from 'react';
import { useChats } from '../../context/ChatContext';
import { useSearchParams } from 'react-router-dom';
import ChatItem from './ChatItem';
import SidebarHeader from './SidebarHeader';
import MyProfile from './MyProfile';
import './Sidebar.css';

const Sidebar = () => {
    const { chats, isMyProfileOpen } = useChats();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') || "";
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filters = ["Todos", "No leídos", "Favoritos", "Grupos"];

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = (e) => {
        const value = e.target.value;
        if (value) {
            setSearchParams({ search: value });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className="sidebar">
            <SidebarHeader />

            <div className="search-container">
                <div className="search-input-wrapper">
                    <i className="bi bi-search search-icon"></i>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Busca un chat o inicia uno nuevo"
                        value={query}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className="filter-chips">
                {filters.map(filter => (
                    <button
                        key={filter}
                        className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
                <button className="filter-chip plus">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>

            <div className="chat-list">
                {filteredChats.map(chat => (
                    <ChatItem key={chat.id} chat={chat} />
                ))}
            </div>

            {isMyProfileOpen && <MyProfile />}
        </div>
    );
};

export default Sidebar;
