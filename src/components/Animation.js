import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import Timeline from '../pages/Timeline';
import MyPosts from '../pages/MyPosts';
import UserPosts from '../pages/UserPosts';
import Hashtag from '../pages/Hashtag';

function AnimationStyle({ location }) {

    return (
        <Wrapper>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                >
                    <section className='route-section'>
                        <Switch location={location}>
                        <Route path="/hashtag/:hashtag" component={Hashtag} exact />
                    <Route path="/user/:id" component={UserPosts} exact />
                    <Route path="/MyPosts" component={MyPosts} exact />
                    <Route path="/Timeline" component={Timeline} exact />
                    <Route path="/Signup" component={SignUp} exact />
                    <Route path="/" component={Login} exact />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
    }
    div.transition-group {
        position: relative;
    }
    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
`;

export default withRouter(AnimationStyle);