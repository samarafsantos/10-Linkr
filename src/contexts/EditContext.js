import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

const EditContext = createContext();

export default EditContext;

export function EditProvider(props){
    const { userInfo } = useContext(UserContext);
    const [textEdit, setTextEdit] = useState('');
    const [postId, setPostId] = useState(0);
    const [editing, setEditing] = useState(false);
    const [modified, setModified] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function editClick() {
        editing ? setEditing(false) : setEditing(true);
    }

    function postEdit() {
        const request = axios.put(`https:ssss//mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}`, {text: textEdit}, { headers: { 'User-token': userInfo.data.token } });
        request.then(() => {
            setModified(true);
            setEditing(false);
            setDisabled(false);
        })
        request.catch(() => {
            setDisabled(false);
            setEditing(true);
            alert('Não foi possível realizar as alterações.');
        })
    }
   
    return(
        <EditContext.Provider value={{postEdit, editClick, editing, setEditing, textEdit, setTextEdit, postId, setPostId, modified, setModified, disabled, setDisabled}}>
            {props.children}
        </EditContext.Provider>
    )
}


