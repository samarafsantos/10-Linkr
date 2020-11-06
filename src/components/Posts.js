import React, {useContext, useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';
import axios from "axios";

import ReactHashtag from "react-hashtag";
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player'


import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

import UserContext from '../contexts/UserContext';
import EditContext from '../contexts/EditContext';

import styled from 'styled-components';
import Edit from '../components/Edit';

import { Snippet, PostSection, ModalContent } from '../styles/timeline';

ReactModal.setAppElement('#root');

export default function Post(props) {
    const { post } = props;
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userId = userInfo.data.user.id;
    const { editing, setEditing, editClick, modified, textEdit, postId, setPostId } = useContext(EditContext);
    const [clicked, setClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [like,setLike] = useState(false);
    const [likeMessage, setLikeMessage] = useState("");
    const [numLikes, setNumLikes] = useState(post.likes.length);

    useEffect(() => {
        setLike(post.likes.some(like => (like.userId === userId || like.id === userId)));
    },[]);

    useEffect(() => {
        let text = "";
        if (like) {
            switch (numLikes){
                case 1: text = "Você";
                        break;
                case 2: text = "Você e "+post.likes[0]['user.username'];
                        break;
                case 3: text = "Você, "+post.likes[0]['user.username']+" e "+(numLikes - 2)+" pessoa";
                        break;
                default: text = "Você, "+post.likes[0]['user.username']+" e "+(numLikes - 2)+" pessoas";
            }
        }else{
            switch (numLikes){
                case 0: text = "0 curtidas";
                        break;
                case 1: text = post.likes[0]['user.username'];
                        break;
                case 2: text = post.likes[0]['user.username']+" e "+(numLikes - 1)+" pessoa";
                        break;
                default: text = post.likes[0]['user.username']+" e "+(numLikes - 1)+" pessoas";
            }
        }
        setLikeMessage(text);
    },[numLikes, like]);

    useEffect(() => {
        ReactTooltip.rebuild();
    },[like]);
    
    let history = useHistory();

    function handleOpenModal() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    function likePost(likePost){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/"+likePost.id+"/like",{},{ headers: { 'User-token': userInfo.data.token } });
        request.then(() => {
            setLike(true);
            setNumLikes(numLikes+1);
        });
    }
    function dislikePost(dislikePost){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/"+dislikePost.id+"/dislike",{},{ headers: { 'User-token': userInfo.data.token } });
        request.then(() => {
            setLike(false);
            setNumLikes(numLikes-1);
        });
    }

    function handleDeletion(deletePost){
        if (clicked) return;

        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${deletePost.id}`, { headers: { 'User-token': userInfo.data.token } })

        setClicked(true);

        request.then(() => {
            setShowModal(false);
            setUpdate(!update);
        })

        request.catch(() => {
            setShowModal(false);
            setClicked(false);
            alert("Não foi possível excluir o post");
        })
    }

    function handleEdit(editPost) {
        if (editing) {
            setEditing(false);
        }
        else {
            editClick();
            setPostId(editPost.id);
        }
    }

    function profile(user) {
        const id = user.id;
        history.push("/user/" + id);
    }

    function hashtagPage(val) {
        const hash = val.split('#');
        history.push("/hashtag/" + hash[1]);
    }
    return (
        <PostSection>
            <div className="likes">
                <img src={post.user.avatar} onClick={() => profile(post.user)} />
                <div>
                    {like ? 
                        <FcLike data-tip={likeMessage} onClick={()=>dislikePost(post)} className="icon"/> : 
                        <AiOutlineHeart data-tip={likeMessage} onClick={()=>likePost(post)} className="icon" />}
                        <ReactTooltip />
                        {numLikes === 1 ? <p>{numLikes} like</p> : <p>{numLikes} likes</p>}
                </div>
            </div>
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
                    <h2 onClick={() => profile(post.user)}>{post.user.username}</h2>
                    {post.user.id === userId ? <><FaPencilAlt icon={FaPencilAlt} onClick={() => handleEdit(post)} /><FaRegTrashAlt icon={FaRegTrashAlt} onClick={handleOpenModal} /></> : ""}
                </div>
                {editing && post.user.id === userId && postId === post.id ?
                    <Edit text={post.text} /> :
                    modified && post.user.id === userId && postId === post.id ?
                        <p><ReactHashtag onHashtagClick={val => hashtagPage(val)}>
                            {textEdit}
                        </ReactHashtag></p> :
                        <p><ReactHashtag onHashtagClick={val => hashtagPage(val)}>
                            {post.text}
                        </ReactHashtag></p>
                }
                <Snippet onClick={() => window.open(post.link)}>

                    {post.link.includes("youtube") ? (
                        <div className="youtube">
                            <PlayerContainer>
                                <YoutubePlayer url={post.link} controls={true} width={"100%"} />
                                <a href="">{post.link}</a>
                            </PlayerContainer> </div>
                    ) : (
                            <>
                                <div>
                                    <h3>{post.linkTitle}</h3>
                                    <p>{post.linkDescription}</p>
                                    <a href="">{post.link}</a>
                                </div>
                                <img src={post.linkImage} /> </>

                        )}
                </Snippet>

            </div>
        </PostSection>
    );
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
        right: "400px",
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
        h1: {
            color: "#FFF",
            fontSize: "20px",
            padding: "0px 50px",
            textAlign: "center",
            marginBottom: "15px",
        }
    }
};


const PlayerContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%
  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const YoutubePlayer = styled(ReactPlayer)`
  margin-bottom: 10px;
  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;