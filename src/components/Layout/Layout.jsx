import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SkinnySidebar from './SkinnySidebar';
import './Layout.css';

const Layout = () => {
    const location = useLocation();


    const isChatOpen = location.pathname.startsWith('/chat/');

    return (
        <div className={`app-container ${isChatOpen ? 'chat-open' : ''}`}>
            <SkinnySidebar />
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
