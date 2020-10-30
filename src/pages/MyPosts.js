import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../components/Header';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";

import { Container, Title } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, SetHasMore] = useState(10);
    const [load, setLoad] = useState(false)
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data;
    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${userData.user.id}/posts?offset=${page}&limit=${hasMore}`, { headers: { 'User-token': userInfo.data.token } });
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
        })
    }, [update, page, hasMore]);

    const { avatar } = userData.user;

    return (
        <>
            <Header avatar={avatar} />
            <Container>
                <div>
                    <Title>My posts</Title>
                    {
                        posts.length === 0 ?
                            <h1>Loading...</h1> :
                            <InfiniteScroll
                                dataLength={posts.data.posts.length}
                                next={() => {
                                    setPage(page+1);
                                    SetHasMore(hasMore+1)}}
                                hasMore={posts.data.posts.length < hasMore ? false : true}>  
                            <ul>{posts.data.posts.map(p => <Post post={p} />)}</ul>
                            </InfiniteScroll>
                    }
                </div>
                <Trendings />
            </Container>
        </>
    );
}