import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import Timeline from '../pages/Timeline';
import UserContext from '../contexts/UserContext';

export default function App() {
    const [userInfo, setUserInfo] = useState({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Router>
                <Switch>
                    <Route path="/Signup" component={SignUp} />
                    <Route path="/" component={Login} />
                    <Route path="/Timeline" component={Timeline} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}