import React, { useState, useContext, useEffect } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import UserContext from '../contexts/UserContext'
import { HeaderContainer, SearchContainer, UsersContainer } from '../styles/timeline'
import { DebounceInput } from 'react-debounce-input';
import axios from "axios";


export default function Header(props) {
    const { avatar, id } = props;
    const [isDroped, setIsDroped] = useState(false);
    const { setUserInfo, userInfo } = useContext(UserContext);
    const userData = userInfo.data;
    const history = useHistory();
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState('');
    const [searchedUsers, setSearchedUsers] = useState([]);


    function dropDownMenu() {
        setIsDroped(!isDroped);
    }

    function logout() {
        setUserInfo({})
        history.push('/');
    }

    useEffect(() => {

        if (search.length < 3) {
            setSearchedUsers([]);
            return;
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${search}`, { headers: { "User-Token": userData.token } });

        request.then(response => {
            let followed = [];
            let unfollowed = [];
            response.data.users.forEach(i => {
                if (i.id === id);
                else if (i.isFollowingLoggedUser) {
                    followed.push(i);
                } else {
                    unfollowed.push(i);
                }
            });
            setSearchedUsers([...followed, ...unfollowed]);
        });
    }, [search]);

    return (
        <>
            <HeaderContainer>
                <h1 onClick={() => history.push("/timeline")}>linkr</h1>
                <SearchContainer>
                    <DebounceInput
                        placeholder={focus ? '' : 'Search for people and friends'}
                        onFocus={() => setFocus(true)}
                        minLength={3}
                        debounceTimeout={300}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {focus
                        ? ''
                        : <IoMdSearch />
                    }
                    <UsersContainer>
                        {searchedUsers.length
                            ? searchedUsers.map((u, i) => (
                                (u.isFollowingLoggedUser)
                                    ? <Link to={{ pathname: `/user/${u.id}` }} key={i}>
                                        <img src={u.avatar} />
                                        <p>{u.username} <span>• following</span></p>
                                    </Link>
                                    : <Link to={{ pathname: `/user/${u.id}` }} key={i}>
                                        <img src={u.avatar} />
                                        <p>{u.username}</p>
                                    </Link>
                            ))
                            : ''
                        }
                    </UsersContainer>
                </SearchContainer>

                <div className="show-menu">
                    {isDroped
                        ? <BsChevronUp onClick={dropDownMenu} />
                        : <BsChevronDown onClick={dropDownMenu} />
                    }
                    <img src={avatar} />
                </div>
            </HeaderContainer>
            <Menu isDroped={isDroped}>
                <Link to="/MyPosts">My posts</Link>
                <Link to="">My likes</Link>
                <button onClick={logout}>Logout</button>
            </Menu>
        </>
    )
}

const Menu = styled.div`
    position: fixed;
    font-family: 'Lato',sans-serif;
    font-size:17px;
    background: #171717;
    right: 0;
    top: ${props => props.isDroped ? "63px" : "-34px"};
    transition: top .5s ease-in-out;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 17px;
    color:white;
    border-radius: 0px 0px 0px 20px;
    z-index:10;

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
    
    @media(max-width: 600px) {
        right: 0;
        top: ${props => props.isDroped ? "103px" : "-34px"};
    }
`
