import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AnimationStyle from './Animation';
import UserContext from '../contexts/UserContext';
import { EditProvider } from '../contexts/EditContext';

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const [update, setUpdate] = useState(false)

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, update, setUpdate }}>
            <EditProvider>
                <Router>
                    <AnimationStyle />
                </Router>
            </EditProvider>
        </UserContext.Provider>
    );
}