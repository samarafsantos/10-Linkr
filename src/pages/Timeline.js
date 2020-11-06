import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from '../components/Header';
import InputPost from '../components/InputPost';
import Post from "../components/Posts";
import Trendings from "../components/Trendings";
import { Container, Title } from '../styles/timeline';
import UserContext from '../contexts/UserContext';

export default function Timeline() {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false);
    const [follows, setFollows] = useState(false);
    const { userInfo, update, setUpdate } = useContext(UserContext);
    const userData = userInfo.data;

    if (userData === undefined) {
        window.location = "http://localhost:9000";
    }

    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', {headers: {"User-Token": userData.token }});
        request.then(response => setFollows(response.data.users.length));     
    },[]);

    useEffect(() => serverRequest(), []);

    useEffect(() => {
        const interval = setInterval(() => serverRequest(), 15000);
        return () => clearInterval(interval);
    }, [update, page]);

    function serverRequest(){
        let mounted = true;
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=${page}&limit=10`, {headers: {"User-Token": userData.token }});
            request.then((response) => {
                if (mounted) {
                    let newPosts = [...posts, ...response.data.posts];
                setPosts(newPosts);
                setLoad (true);
                }
            })
            request.catch(() => {
                alert("Houve uma falha ao obter os posts, por favor atualize a página");
                setLoad (false);
            });
            return () => mounted = false;
    }

    const { avatar } = userData.user;

    return (
        <>
            <Header avatar={avatar} />
            <Container>
                <div className="title">
                    <Title>timeline</Title>
                    <InputPost
                        userData={userData}
                        update={update}
                        setUpdate={setUpdate}
                    />
                         {(posts.length === 0 && !load) ? 
                            <h1 className="h1">Loading...</h1> : 
                            ((posts.length === 0 && load && follows!==0) ? 
                                (<h1 className="h1">Nenhum post encontrado</h1>) : 
                                ((posts.length === 0 && load && follows===0) ? 
                                    (<h1 className="h1">Você não segue ninguém ainda, procure por perfis na busca</h1>) : 
                                        (<InfiniteScroll
                                            dataLength={posts.length}
                                            next={() => {
                                                setPage(page+10);
                                            }}
                                            hasMore={posts.length>(page+10) ? true : false}>
                                            <ul>{(posts.map(p => <Post post={p} key={p.id}/>))}</ul>
                                        </InfiniteScroll>)
                                    )
                                )
                            }
                </div>
                <Trendings />
            </Container>
        </>
    );
}






//                     {
//                         noFollow === true ? 
//                             <h1>Você não segue ninguém ainda, procure por perfis na busca</h1>:
//                             load ?
//                                 (<h1>Loading...</h1>) : 
//                                     posts.length === 0 ? 
//                                         <h1>"Nenhuma publicação encontrada"</h1> :
//                                         <InfiniteScroll
//                                             dataLength={posts.length}
//                                             next={() => {
//                                                 setPage(page+10)}}
//                                             hasMore={true}>
//                                             <ul>{posts.map(p => <Post post={p} />)}</ul>
//                                         </InfiniteScroll>
//                     }
//                 </div>
//                 <Trendings />
//             </Container>
//         </>
//     );
// }