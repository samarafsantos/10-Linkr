import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { Container, LoginTitle, LoginInfo } from '../styles/login';
import UserContext from '../contexts/UserContext';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [clicked, setClicked] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserContext);

    const history = useHistory();

    
    function sendRequest(event) {
        event.preventDefault();

        if(clicked)  return;

        if(email === '' || password === '' || username === '' || pictureUrl === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        //https://pm1.narvii.com/6055/c57c6dd83178676ae35485d77bd40ffb5b34ccf6_hq.jpg

        setClicked(true);

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up', { email, password, username, pictureUrl });

        request.then(response => {
            const data = response.data;
            setUserInfo({...userInfo, data});
            history.push('/Timeline');
        });

        request.catch(() => alert('E-mail inserido já cadastrado'));
    }

    return (
        <Container>
            <LoginTitle>
                <h1>Linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </LoginTitle>
            <LoginInfo onSubmit={sendRequest}>
                <input 
                    type='email' 
                    onChange={e => setEmail(e.target.value)} 
                    value={email} 
                    placeholder='e-mail'
                />
                <input 
                    type='password'
                    onChange={e => setPassword(e.target.value)} 
                    value={password} 
                    placeholder='password'
                />
                <input 
                    type='text'
                    onChange={e => setUsername(e.target.value)} 
                    value={username} 
                    placeholder='username'
                />
                <input 
                    type='url'
                    onChange={e => setPictureUrl(e.target.value)} 
                    value={pictureUrl} 
                    placeholder='picture url'
                />
                <button type='submit'>Log In</button>
                <Link to='/Login'>Switch back to log in</Link>
            </LoginInfo>
        </Container>
    );
}