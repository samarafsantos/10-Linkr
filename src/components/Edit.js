import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components';
import EditContext from '../contexts/EditContext';

export default function Edit(props) {
    const { text } = props;
    const { textEdit, setTextEdit, editing, setEditing, postEdit, disabled, setDisabled } = useContext(EditContext);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        textEdit === ''
            ? setTextEdit(text)
            : setTextEdit(textEdit)
    }, [editing]);

    return (
        <TextArea
            ref={inputRef}
            autoFocus
            type='text'
            onChange={e => {
                setTextEdit(e.target.value);
            }}
            onKeyUp={(e) => {
                if (e.keyCode === 27) {
                    setEditing(false);
                }
                if (e.keyCode === 13) {
                    setDisabled(true);
                    postEdit();
                }
            }}
            value={textEdit}
            disabled={disabled} />
    );

}

const TextArea = styled.textarea`
    width: 100%;
    background: #EFEFEF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px 10px;
`;