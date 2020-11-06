import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Header from '../components/Header';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";

import { Container, Title } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function Hashtag(props) {
    let URL = props.match.params;

    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false)
    const [posts, setPosts] = useState([]);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data;

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${URL.hashtag}/posts?offset=${page}&limit=10`, { headers: { 'User-token': userInfo.data.token } });
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
    console.log(posts);
    console.log(page);
    const { avatar } = userData.user;
    return (
        <>
            <Header avatar={avatar} />
            <Container>
                <div>
                    {posts.length !== 0 && <Title># {URL.hashtag}</Title>}
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