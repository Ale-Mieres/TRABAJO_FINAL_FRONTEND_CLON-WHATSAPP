import { useNavigate } from 'react-router-dom';

export const useChatNavigation = () => {
    const navigate = useNavigate();

    const openChat = (chatId) => {
        navigate(`/chat/${chatId}`);
    };

    const goBack = () => {
        navigate('/');
    };

    return { openChat, goBack };
};
