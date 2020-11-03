import React, {useContext, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaRegTrashAlt } from "react-icons/fa";
import ReactHashtag from "react-hashtag";
import { useHistory } from "react-router-dom";
import UserContext from '../contexts/UserContext';

import { Snippet, PostSection } from '../styles/timeline';

export default function Post(props) {
    const { post } = props;
    let history = useHistory();
    const { userInfo } = useContext(UserContext);
    const userId = userInfo.data.user.id;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    function Profile(user) {
        const id = user.id;
        console.log(user);
        history.push("/user/" + id);
    }

    function HashtagPage(val) {
        const hash = val.split('#');
        history.push("/hashtag/" + hash[1]);
    }

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button variant="primary" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
        <PostSection>
            <img src={post.user.avatar} onClick={() => Profile(post.user)} />
            <div className="post">
                <div>
                    <h2 onClick={() => Profile(post.user)}>{post.user.username}</h2>
                    {post.user.id === userId ? <FaRegTrashAlt icon={FaRegTrashAlt} onClick={() => handleShow()}/> : ""}
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
