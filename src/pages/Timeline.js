import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import Header from '../components/Header';
import InputPost from '../components/InputPost';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";

import { Container, Title } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=15", { headers: { 'User-token': userInfo.data.token } });
        request.then((response) => {
            if (response.length === 0) {
                alert("Nenhum post encontrado");
                return;
            }
            setPosts(response);
        })
        request.catch(() => {
            alert("Houve uma falha ao obter os posts, por favor atualize a página");
        })
    }, [update]);

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
                        posts.length === 0 ?
                            <h1>Loading...</h1> :
                            <ul>{posts.data.posts.map(p => <Post post={p} />)}</ul>
                    }
                </div>
                <Trendings />
            </Container>
        </>
    );
}