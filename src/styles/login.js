import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const LoginTitle = styled.div`
    padding: 30vh 8vw;
    width: 75vw;
    height: 100vh;
    color: #FFF;
    background-color: #151515;
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    h1 {
        font-family: 'Passion One', cursive;
        font-size: 106px;
    }
    h2 {
        font-size: 43px;
    }
`;

export const LoginInfo = styled.form`
    width: 35vw;
    height: 100vh;
    padding: 32vh 5%;
    text-align: center;
    input, button {
        width: 90%;
        border: none;
        border-radius: 3px;
        padding: 13px 5px;
        outline-style: none;
        margin: 5px 0;
        font-size: 16px;
        font-weight: bold;
    }
    button {
        background-color: #1877F2;
        color: #FFF;
        margin-bottom: 20px;
    }
    a {
        text-decoration: underline;
        color: black;
        font-size: 14px;
        display: block;
    }
`;