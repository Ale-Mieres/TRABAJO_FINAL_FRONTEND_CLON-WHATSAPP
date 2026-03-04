import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useChats } from './context/ChatContext';
import Layout from './components/Layout/Layout';
import Welcome from './pages/Welcome';
import ChatView from './components/Chat/ChatView';
import Login from './pages/Login';
import SplashScreen from './components/Shared/SplashScreen';

function App() {
  const { user } = useChats();
  const [appReady, setAppReady] = useState(false);

  if (!appReady) {
    return <SplashScreen onComplete={() => setAppReady(true)} message="Preparando laboratorio..." />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={user ? <Layout /> : <Navigate to="/login" />}
      >
        <Route index element={<Welcome />} />
        <Route path="chat/:chatId" element={<ChatView />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
