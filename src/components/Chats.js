import React from 'react';
import { ChatEngine } from "react-chat-engine";
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push("/");
    }
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Let's Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="1c0f3ab0-e5a0-434f-8258-4b6ec6653416"
                userName="."
                userScreen="."
            />
        </div>
    );
};

export default Chats;
