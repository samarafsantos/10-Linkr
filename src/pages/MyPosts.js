import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import { Container, Title } from '../styles/timeline'

export default function MyPosts() {
    const { userInfo } = useContext(UserContext);
    const userData = userInfo.data
    const { avatar } = userData.user;

    return (
        <>
            <Header avatar = {avatar} />
            <Container>
            <Title>My Posts</Title>
            </Container>
        </>
    )
}