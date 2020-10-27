
import React, { useContext } from 'react';

import { Container, Title, Post, Snippet } from '../styles/timeline';

import UserContext from '../contexts/UserContext';

export default function Timeline() {
    const data = useContext(UserContext);
    const { userInfo } = data;
    console.log(userInfo);
    return (
        <Container>
            <Title>timeline</Title>
            <Post>
                <img src="https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/16143093_1860818147506727_7419029603285596629_n.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=7NY-aCc6v_QAX-wJ9xD&_nc_ht=scontent.fgig4-1.fna&oh=3e277821d7a4b1f291d5b621e2f6fdfa&oe=5FBF0AC4" />
                <div className="post">
                    <h2>nome</h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                    <Snippet>
                        <div>
                            <h3>Como fazer n sei o que em React</h3>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                            <a href="https://www.google.com"/>
                        </div>
                        <img src="https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/16143093_1860818147506727_7419029603285596629_n.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=7NY-aCc6v_QAX-wJ9xD&_nc_ht=scontent.fgig4-1.fna&oh=3e277821d7a4b1f291d5b621e2f6fdfa&oe=5FBF0AC4" />
                    </Snippet>
                </div>
            </Post>
        </Container>
    );
}