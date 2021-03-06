import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../components/Header';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";
import { Container, Title } from '../styles/timeline';
import UserContext from '../contexts/UserContext';

export default function UserPosts(props) {
    let URL = props.match.params;
    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false);
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState([]);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data;
    const [isFollowing, setIsFollowig] = useState(false);
    const [clicked, setClicked] = useState(false);
    const id = parseFloat(URL.id)

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${URL.id}`, { headers: { 'User-token': userInfo.data.token } });
        request.then((response) => {
            if (response.length === 0) {
                alert("Nenhum post encontrado");
                return;
            }
            setInfo(response);
        })
        request.catch(() => {
            alert("Houve uma falha ao obter os posts, por favor atualize a página");

        })
    }, []);

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${URL.id}/posts?offset=${page}&limit=10`, { headers: { 'User-token': userInfo.data.token } });
        request.then((response) => {
            if (response.length === 0) {
                alert("Nenhum post encontrado");
                return;
            }
            setPosts(response);
            setLoad(true);
        })
        request.catch(() => {
            alert("Houve uma falha ao obter os posts, por favor atualize a página");
            setLoad(false);
        })
    }, [update, page]);

    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', { headers: { "User-Token": userData.token } });

        request.then(response => {
            response.data.users.forEach(i => {
                if (i.id === id) {
                    setIsFollowig(true);
                }
            });
        });
    }, []);

    const userId = userInfo.data.user.id;
    const { avatar } = userData.user;
    return (
        <>
            <Header avatar={avatar} id={userId} />
            <Container>
                <div>
                    <ConteinerFollow>
                        <div className="name">
                            {info.length !== 0 && <><img src={info.data.user.avatar} alt="" /><Title>{info.data.user.username}'s posts</Title></>}</div>

                        <>
                            {isFollowing
                                ? <Button onClick={() => Follow(clicked, setClicked, id, userData, isFollowing, setIsFollowig)}>unfollow</Button>
                                : URL.id == userId ? null : <Button onClick={() => Follow(clicked, setClicked, id, userData, isFollowing, setIsFollowig, update, setUpdate)}>follow</Button>
                            }
                        </>
                    </ConteinerFollow>

                    {
                        (posts.length === 0 && !load) ?
                            <h1>Loading...</h1> :
                            <InfiniteScroll
                                dataLength={posts.data.posts.length}
                                next={() => {
                                    setPage(page + 10)
                                }}
                                hasMore={posts.data.posts.length > (page + 10) ? true : false}>
                                <ul>{posts.data.posts.map(p => <Post post={p} key={p.id} />)}</ul>
                            </InfiniteScroll>
                    }
                </div>
                <Trendings />
            </Container>
        </>
    );
}

function Follow(clicked, setClicked, id, userData, isFollowing, setIsFollowig, update, setUpdate) {

    if (clicked) return;
    let request;

    if (isFollowing) {
        request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/unfollow`, id, { headers: { "User-Token": userData.token } });
    } else {
        request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/follow`, id, { headers: { "User-Token": userData.token } });
    }

    request.then(() => {
        setIsFollowig(!isFollowing);
        setClicked(false);
        setUpdate(!update);
    });

    request.catch(() => {
        alert('Não foi possível realizar a operação');
        setClicked(false);
    });
}


const ConteinerFollow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
        display: flex;
        align-items: center;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 15px;
            flex-shrink:0;
        }
        @media (max-width: 600px) {
            margin-top: 80px;       
        }
    }
`

const Button = styled.button`
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    border: none;
    padding: 5px 20px;
    background: #1877F2;
    color: white;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    @media (max-width: 600px) {
        margin-top:80px;       
    }
`