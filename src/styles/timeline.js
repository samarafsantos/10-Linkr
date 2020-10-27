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

export const PostSection = styled.div`
    margin-top: 20px;
    background: #171717;
    width: 600px;
    display: flex;
    border-radius: 10px;
    & > img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 15px;
        flex-shrink:0;
    }
    .post{
        width: 80%;
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
    word-break: break-word;
    display: flex;
    color: #FFF;
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    margin-top: 10px;
    & > div{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;
    }
    & > img {
        width: 40%;
    }
    h3{
        color: #CECECE;
    }
    p{
        color: #9B9595;
    }
    a{
        color: #CECECE;
        text-decoration: underline;
        font-size: 10px;
        margin-top: 15px;
        /* overflow: hidden; */
    }
`;
export const HeaderContainer = styled.header `
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#151515;
    padding:5px 20px;
    h1 {
        font-family: 'Passion one', sans-serif;
        font-weight:bold;
        color:white;
        font-size:49px;
    }
    div {
        display: flex;
        align-items: center;
    }
    img {
        width:53px;
        height:53px;
        border-radius:50%;
        cursor: pointer;
    }
    
    svg {
        color: white;
        margin-right: 5px;
        cursor: pointer;
        font-size: 25px;
    }
`

export const MainContainer = styled.main `
    padding: 0px 15vw;
    font-family:'Lato', sans-serif;
    & > h1 {
        color:white;
        font-weight:bold;
        font-size:43px;
        font-family: 'Oswald' , sans-serif;
    }
    & > div {
        background: black;
        display:flex;
        height: 200px;
        padding: 12px 20px;
    }
    & > div h1 {
        color:#707070;
        font-weight:300;
        font-size:20px;
        margin-bottom:10px;
    }
    & > div img {
        width:53px;
        height:53px;
        border-radius:50%;
        margin-right: 15px;
    }
    & > div input {
        background: #EFEFEF;
        font-size:15px;
        font-family:inherit;
        font-weight:300;
        outline:none;
        border: none;
        width:100%;
        margin-bottom:5px;
        padding: 5px;
        border-radius: 4px;
    }
    & > div textarea {
        outline:none;
        border:none;
        background: #EFEFEF;
        width:100%;
        resize: none;
        padding: 5px;
        border-radius: 4px;
    }
    & div > div {
        width: 100%;
    }
    `
