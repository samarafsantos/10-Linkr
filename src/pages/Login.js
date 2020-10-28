import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Container, LoginTitle, LoginInfo } from '../styles/login';
import UserContext from '../contexts/UserContext';


export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserContext);

    function sendRequest(event) {
        event.preventDefault();
        if(clicked) return;
        if(email === '' || password === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        setClicked(true);

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in', { email, password });

        request.then(response => {
            const data = response.data;
            setUserInfo({ ...userInfo, data });
            history.push("/Timeline");
        });

        request.catch(() => alert('E-mail ou senha incorretos'));
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
                <button type='submit'>Log In</button>
                <Link to='/SignUp'>First time? Create an account!</Link>
            </LoginInfo>
        </Container>
    );
}
