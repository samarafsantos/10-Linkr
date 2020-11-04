import React, {useContext, useState} from 'react';
import ReactModal from 'react-modal';
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import ReactHashtag from "react-hashtag";
import { useHistory } from "react-router-dom";
import UserContext from '../contexts/UserContext';

import { Snippet, PostSection, ModalContent } from '../styles/timeline';

ReactModal.setAppElement('#root');

export default function Post(props) {
    const { post } = props;
    let history = useHistory();
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userId = userInfo.data.user.id;
    const [clicked, setClicked] = useState(false);

    const [showModal, setShowModal] = useState(false);
    function handleOpenModal () {
        setShowModal(true);
    }
    function handleCloseModal () {
        setShowModal(false);
    }
    function handleDeletion(deletePost){
        console.log("got here");
        
        if (clicked) return;

        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${deletePost.id}`, { headers: { 'User-token': userInfo.data.token } })
        
        setClicked(true);
        
        request.then(() => {
            setShowModal(false);
            setUpdate(!update);
            console.log("requisição deu bom")
        })
        
        request.catch(() => {
            setShowModal(false);
            setClicked(false);
            alert("Não foi possível excluir o post");
        })
    }

    function Profile(user) {
        const id = user.id;
        console.log(user);
        history.push("/user/" + id);
    }

    function HashtagPage(val) {
        const hash = val.split('#');
        history.push("/hashtag/" + hash[1]);
    }

    const style = {
        overlay: { 
            width: "100vw",
            heigth: "100vh",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(255, 255, 255, 0.85)"
        },
        content: { 
            position: "fixed",
            top: "150px",
            left: "400px",
            right:"400px",
            bottom: "300px",
            border: "1px solid rgb(204, 204, 204)",
            backgroundColor: "#333",
            overflow: "auto",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            color: "#FFF",
            h1:{
                color: "#FFF",
                fontSize: "20px",
                padding: "0px 50px",
                textAlign: "center",
                marginBottom: "15px",
            }
         }
    };

    return (
        <>
        {/*  */}
        
        <PostSection>
            <img src={post.user.avatar} onClick={() => Profile(post.user)} />
            <div className="post">
                <div>
                <ReactModal 
                    isOpen={showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                    style={style}>
                    <ModalContent>
                        <p>Tem certeza que deseja excluir essa publicação?</p>
                        <div>
                            <button onClick={handleCloseModal}>Não, voltar</button>
                            <button onClick={() => handleDeletion(post)}>Sim, excluir</button>
                        </div>
                    </ModalContent>
                </ReactModal>
                    <h2 onClick={() => Profile(post.user)}>{post.user.username}</h2>
                    {post.user.id === userId ? <FaRegTrashAlt icon={FaRegTrashAlt} onClick={handleOpenModal}/> : ""}
                </div>
                <p><ReactHashtag onHashtagClick={val => HashtagPage(val)}>
                    {post.text}
                </ReactHashtag></p>
                <Snippet onClick={() => window.open(post.link)}>
                    <div>
                        <h3>{post.linkTitle}</h3>
                        <p>{post.linkDescription}</p>
                        <a href="">{post.link}</a>
                    </div>
                    <img src={post.linkImage} />
                </Snippet>
            </div>
        </PostSection>
    </>
    );
}
