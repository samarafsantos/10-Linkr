import React, { useState, useContext } from 'react'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../contexts/UserContext'
import {HeaderContainer} from '../styles/timeline'

export default function Header(props) {
    const {avatar} = props;
    const [isDroped, setIsDroped] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    const history = useHistory();

    function dropDownMenu () {
        setIsDroped(!isDroped);
    }

    function logout() {
        setUserInfo({})
        history.push('/');
    }

    return (
        <>
            <HeaderContainer>
                <h1 onClick={() => history.push("/timeline")}>linkr</h1>
                <div>
                    {isDroped
                        ? <BsChevronUp onClick={dropDownMenu}/>
                        : <BsChevronDown onClick={dropDownMenu}/>
                    }                    
                    <img src={avatar}/>
                </div>
            </HeaderContainer>
            <Menu isDroped = {isDroped}>
                <Link to="/MyPosts">My posts</Link>
                <Link to="">My likes</Link>
                <button onClick={logout}>Logout</button>
            </Menu>
        </>
    )
}

const Menu = styled.div `
    position: fixed;
    font-family: 'Lato',sans-serif;
    font-size:17px;
    background: #171717;
    right: 0;
    top: ${props=>props.isDroped ? "63px":"-34px"};
    transition: top 1s ease-in-out;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 17px;
    color:white;
    border-radius: 0px 0px 0px 20px;
    a {
        color:inherit;
        display:block;
    }
    a:first-child { 
        margin-bottom: 5px;
    }
    button {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin-top: 2px;
        cursor: pointer;
    }
`