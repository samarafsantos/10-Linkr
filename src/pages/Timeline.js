import React, { useContext, useEffect, useState } from 'react';

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../components/Header';
import InputPost from '../components/InputPost';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";

import { Container, Title } from '../styles/timeline';
 
import UserContext from '../contexts/UserContext';

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, SetHasMore] = useState(10);
    const [load, setLoad] = useState(false);
    const [noFollow, setNoFollow] = useState(false);
    const { userInfo, update, setUpdate } = useContext(UserContext);

    const userData = userInfo.data;

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }
    useEffect(serverRequest, []);

    useEffect(() => {
        const interval = setInterval(serverRequest, 15000);
        return () => clearInterval(interval);
    }, [update, page, hasMore]);

    function serverRequest(){
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=${page}&limit=${hasMore}`, { headers: { 'User-token': userInfo.data.token } });
            setLoad(true);
            request.then((response) => {
                setLoad(false);
                if (response.data.posts.length === undefined || response.data.posts.length === 0) {
                    useEffect(()=>{
                        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', {headers: {"User-Token": userData.token }});
                        req.then(response => {response.data.users.length === 0 ? setNoFollow(true) : null});
                    }, []);
                }
                else{
                    setPosts(response);
                    setNoFollow(false);
                }
            })
            request.catch(() => {
                setLoad(false);
                alert("Houve uma falha ao obter os posts, por favor atualize a página");
            })
    }

    const { avatar } = userData.user;
    return (
        <>
            <Header avatar={avatar} />
            <Container>
                <div>
                    <Title>timeline</Title>
                    <InputPost
                        userData={userData}
                        update={update}
                        setUpdate={setUpdate}
                    />
                    {
                        noFollow === true ? 
                            <h1>Você não segue ninguém ainda, procure por perfis na busca</h1>:
                            load ?
                                (<h1>Loading...</h1>) : 
                                    posts.length === 0 ? 
                                        <h1>"Nenhuma publicação encontrada"</h1> :
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