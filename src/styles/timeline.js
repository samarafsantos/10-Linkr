import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #333;
    padding: 10%;

    @media (max-width: 600px) {
        display: block;
        padding: 5%;
    }

    & > div{
        .h1{
            margin: 15px;
            color: #FFF;
        }
    }

    .title {
        @media (max-width: 600px) {
                margin-top: 100px;       
            }
    }

    .trendings{
        background: #171717;
        width: 300px;
        height: fit-content;
        color: #FFF;
        border-radius: 10px;
        margin-top: 120px;
        margin-left: 50px;

        h1{
            padding: 20px;
            font-size: 20px;
            border-bottom: 1px solid #484848;
        }
        ul{
            padding: 15px;
            li{
                padding-bottom: 20px;
                font-size: 20px;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`;

export const Title = styled.h1`
    color: #FFF;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;

    @media (max-width: 600px) {
        margin-top: 60px;    
    }
`;

export const PostSection = styled.div`
    margin-top: 40px;
    background: #171717;
    width: 700px;
    display: flex;
    border-radius: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }

    & > img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 15px;
        flex-shrink:0;
        &:hover{
            cursor: pointer;
        }
    }
    .post{
        width: 90%;
        padding: 15px;
        & > div{
            display: flex;
            justify-content: space-between;
            svg{
                color: #FFF;
                margin: 0 5px;
            }
            svg:hover{
                cursor: pointer;
            }
        }
        @media (max-width: 600px) {
            padding: 10px;     
        }  
    }
    h2{
        color: #FFF;
        font-size:19px;
        &:hover{
            cursor: pointer;
        }
    }
    p{
        color: #B7B7B7;
        margin-top:5px;
    }
    span {
        color: #FFF;
        font-weight: bold;  
        &:hover{
            cursor:pointer;
        }
    }

`;

export const ModalContent = styled.div`
    color: #FFF;
    font-size: 20px;
    text-align: center;
    p{
        margin-bottom: 15px;
        padding: 0px 50px; 
    }
    div{
        button{
        padding: 5px 18px;
        margin: 10px;
        border-radius: 5px;
        border: none;
        &:first-child{
            background: #FFF;
            color: #1877F2;
        };
        
        &:last-child{
            background: #1877F2;
            color: #FFF;
        };
        }
        button:hover{
            cursor:pointer;
        }
    } 
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
    }
    &:hover{
        cursor:pointer;
    }
    .youtube {
        display: block;
        width: 100%;
        padding: 10px;
    }
`;
export const HeaderContainer = styled.header`
position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
background:#151515;
padding:5px 20px;
z-index:100;
h1 {
    font-family: 'Passion one', sans-serif;
    font-weight:bold;
    color:white;
    font-size:49px;
    &:hover{
        cursor: pointer;
    }
}

input {
    width: 38vw;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    outline-style: none;
    font-size: 16px;
}

.show-menu {
    display: flex;
    align-items: center;
    cursor: pointer;
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

@media(max-width: 600px) {
    input {
        width: 90vw;
        margin-left: 5%;
        z-index: -10;
    }
}
`;


export const InputContainer = styled.article`
background: #FFF;
display:flex;
padding: 10px 20px;
border-radius: 13px; 
width: 700px;
margin-top: 65px;

@media (max-width: 600px) {
    width: 100%;
}

h1 {
    color:#707070;
    font-weight:300;
    font-size:20px;
    margin-bottom:10px;
}
img {
    width:53px;
    height:53px;
    border-radius:50%;
    margin-right: 15px;
}
input {
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
textarea {
    outline:none;
    border:none;
    background: #EFEFEF;
    width:100%;
    resize: none;
    padding: 5px;
    border-radius: 4px;
    font-family:inherit;
    font-size:15px;        
    font-weight:300;
}
& > div {
    width:100%;
}
div div {
    display:flex;
    justify-content:flex-end;
}
button {
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    border: none;
    padding: 5px 20px;
    background: #1877F2;
    color: white;
    border-radius: 5px;
    margin-top: 5px;
    outline: none;
    cursor: pointer;
}
`

export const SearchContainer = styled.div`
    position: relative;

    & > svg {
        color: #adaaaa;
        cursor: auto;
        position: fixed;
        top: 19px;
        left: 66%;
    }
    
    @media(max-width: 600px) {
        position: absolute;
        top: 70px;
        left: 1vw;
        & > svg {
            top: 76px;
            left: 90%;
            z-index: 100;
        }
    }
`;

export const UsersContainer = styled.div`
    width: 38vw;
    padding: 40px 0px 0px 15px;
    border-radius: 5px;
    font-size: 16px;
    background-color: #E7E7E7;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;

    a {
        display: block;
        margin-bottom: 20px;
        z-index: 9;
    }

    img, p span {
        display: inline-block;
        padding: 10px;
    }
    
    p {
        margin-top: -38px;
        margin-left: 55px;
        font-weight: 300;
    }
    span {
        margin-top: -48px;
        color: #828282;
    }

    @media(max-width: 600px) {
        width: 90vw;
        margin-left: 5%;
    }
    `;