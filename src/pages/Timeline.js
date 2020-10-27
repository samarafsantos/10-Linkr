import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Header from '../components/Header';
import InputPost from '../components/InputPost';

import { MainContainer } from '../styles/timeline'

export default function Timeline() {
    const data = useContext(UserContext);
    const { userInfo } = data;

    return (
        <>
            <Header/>
            <MainContainer>
                <h1>timeline</h1>
                <InputPost/>
            </MainContainer>
        </>
    )
}

