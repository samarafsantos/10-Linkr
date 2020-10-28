import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import UserContext from '../contexts/UserContext';

export default function Trendings() {
    let history = useHistory();
    const [trendings, setTrendings] = useState([]);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data

    if(userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const hashRequest = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending", {headers: {'User-token': userInfo.data.token}});
        hashRequest.then((hashtagsResponse) => {
            if(hashtagsResponse.length===0){
                alert("Nenhuma hashtag encontrada");
                return;
            }
            setTrendings(hashtagsResponse);
        })
        hashRequest.catch(() => {
            alert("Houve uma falha ao obter os trendings, por favor atualize a página");
        })
    },[update]);

    function HashtagPage(val){
        console.log(val);
        
        history.push("/hashtag/"+val.name);
    }
    console.log(trendings);
    return (
        <div className="trendings">
            <h1>Trendings</h1>
            <ul>
            {
                trendings.length === 0 ?
                <h1>Loading...</h1> :
                trendings.data.hashtags.map((h) => <li key={h.id} onClick={() => HashtagPage(h)}># {h.name}</li>)
            }
            </ul>
        </div>
    );
}