import styled from 'styled-components';

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