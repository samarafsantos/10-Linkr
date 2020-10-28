import React from 'react';
import ReactHashtag from "react-hashtag";

import { Snippet, PostSection } from '../styles/timeline';


export default function Post(props) {
    const {post} = props;
    return (
        <PostSection>
            <img src={post.user.avatar}/>
            <div className="post">
                <h2>{post.user.username}</h2>
                <ReactHashtag onHashtagClick={val => alert(val)}>
                {post.text}
                </ReactHashtag>
                <Snippet>
                    <div>
                        <h3>{post.linkTitle}</h3>
                        <p>{post.linkDescription}</p>
                        <a href={post.link}>{post.link}</a>
                    </div>
                    <img src={post.linkImage} />
                </Snippet>
            </div>
        </PostSection>
    );
}
