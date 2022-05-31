import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContributors, getCurrentRepo } from '../actions/reposActions';
import './card.css';

export interface ICardProps {};

const Card: React.FunctionComponent<any> = props => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState<any>({owner: {}});
    const [contributors, setContributors] = useState<any>([]);
 
    useEffect(()=>{
        getCurrentRepo(username, reponame, setRepo);
        getContributors(username, reponame, setContributors);
    }, []);

    return <div>
        <button onClick={() => window.history.back()} className="back-btn">Back</button>
        <div className="card">
            <img src={repo.owner.avatar_url} alt=""/>
            <div className="name">{repo.name}</div>
            <div className="stars">{repo.stargazers_count}</div>
        </div>
        {contributors.map((c:any,index:number) => 
        <div>{index+1} {c.login}</div>)}
    </div>
}
export default Card;