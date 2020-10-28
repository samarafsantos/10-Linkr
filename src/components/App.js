import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import Timeline from '../pages/Timeline';
import MyPosts from '../pages/MyPosts';
import UserContext from '../contexts/UserContext';

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const [update, setUpdate] = useState(false)


    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, update, setUpdate }}>
            <Router>
                <Switch>
                    <Route path="/MyPosts" component={MyPosts} exact />
                    <Route path="/Timeline" component={Timeline} exact />
                    <Route path="/Signup" component={SignUp} exact />
                    <Route path="/" component={Login} exact />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}