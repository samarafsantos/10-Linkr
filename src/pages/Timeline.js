import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import Header from '../components/Header';
import InputPost from '../components/InputPost';
import Post from "../components/Posts";

import { Container, Title } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data

    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=5", {headers: {'User-token': userInfo.data.token}});
        request.then((response) => {
            if(response.length===0){
                alert("Nenhum post encontrado");
                return;
            }
            setPosts(response);
        })
        request.catch(() => {
            alert("Houve uma falha ao obter os posts, por favor atualize a página");
        })
    },[update]);

    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar} />
            <Container>
                <Title>timeline</Title>
                <InputPost 
                userData = {userData} 
                update = {update}
                setUpdate = {setUpdate}
                />
                {
                    posts.length === 0 ?
                    <h1>Loading...</h1> :
                    <ul>{posts.data.posts.map(p => <Post post={p} />)}</ul>
                }
            </Container>
        </>
    );
}



// data:
//     posts: Array(2)
//         0:
//         id: 23
//         likes: []
//         link: "https://stackoverflow.com/questions/36773671/deactivate-input-in-react-with-a-button-click"
//         linkDescription: "I have this basic component and I want the textfield to be deactivated or activated whenever I click on a button. How can I achieve this?↵↵This is my sample code:↵↵import React from "react";↵import "
//         linkImage: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded"
//         linkTitle: "Deactivate input in react with a button click"
//         text: "Dá uma olhada nesse link sobre desabilitar inputs galera."
//         user:
//             avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAdgB2AAD"
//             id: 5
//             username: "catioro"