import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    background-color: #333;
    padding: 10%;
    .trendings{
        background: #171717;
        width: 300px;
        height: fit-content;
        color: #FFF;
        border-radius: 10px;
        margin-top: 80px;
        h1{
            padding: 15px;
            border-bottom: 1px solid #484848;
        }
        ul{
            padding: 15px;
            li{
                padding-bottom: 5px;
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
        &:hover{
            cursor: pointer;
        }
    }
    .post{
        width: 80%;
        padding: 15px;
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
    &:hover{
        cursor:pointer;
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
z-index:1;
h1 {
    font-family: 'Passion one', sans-serif;
    font-weight:bold;
    color:white;
    font-size:49px;
    &:hover{
        cursor: pointer;
    }
}
& > div {
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

export const InputContainer = styled.article `
background: #FFF;
display:flex;
padding: 10px 20px;
border-radius: 13px; 
width: 600px;
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
