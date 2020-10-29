import React from 'react';
import ReactHashtag from "react-hashtag";
import { useHistory } from "react-router-dom";

import { Snippet, PostSection } from '../styles/timeline';

export default function Post(props) {
    const { post } = props;
    let history = useHistory();

    function Profile(user) {
        const id = user.id;
        console.log(user);
        history.push("/user/" + id);
    }

    function HashtagPage(val) {
        console.log(val);
        const hash = val.split('#');
        history.push("/hashtag/" + hash[1]);
    }

    return (
        <PostSection>
            <img src={post.user.avatar} onClick={() => Profile(post.user)} />
            <div className="post">
                <h2 onClick={() => Profile(post.user)}>{post.user.username}</h2>
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
    );
}
