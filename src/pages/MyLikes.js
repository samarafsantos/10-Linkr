import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../components/Header';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";

import { Container, Title } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function MyLikes() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false);
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data;

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`, { headers: { "User-Token": userData.token } });
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
    }, [page]);

    const { avatar } = userData.user;
    
    return (
        <>
            <Header avatar={avatar} />
            <Container>
                <div className="title">
                    <Title>My likes</Title>
                    <div className="like">

                    {
                        (posts.length === 0 && !load) ?
                            <h1>Loading...</h1> :
                            <InfiniteScroll
                                dataLength={posts.data.posts.length}
                                next={() => {
                                    setPage(page + 10)
                                }}
                                hasMore={posts.data.length > (page + 10) ? true : false}>
                                <ul>{posts.data.posts.map(p => <Post post={p} key={p.id} />)}</ul>
                            </InfiniteScroll>
                    }
                    </div>
                </div>
                <Trendings />
            </Container>
        </>
    );
}