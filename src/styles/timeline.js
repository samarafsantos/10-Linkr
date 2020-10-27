import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #333;
    padding: 10%;
`;

export const Title = styled.h1`
    color: #FFF;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    margin-bottom: 40px;
`;

export const Post = styled.div`
    background: #171717;
    width: 600px;
    display: flex;
    border-radius: 10px;
    
    img{
        height: 50px;
        border-radius: 50%;
        margin: 15px;
        flex-shrink:0;
    }
    .post{
        flex-grow: 1;
        padding: 15px;
    }
    h2{
        color: #FFF;
        font-size:19px;
    }
    p{
        color: #B7B7B7;
        margin-top:5px;
    }

    /*a {
        text-decoration: underline;
        font-size: 14px;
        display: block;
    } */
`;

export const Snippet = styled.div`
    
`;