import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './HeroCard.css'

export const HeroCard = ({data, state, changeState}) => {
    const{id} = useParams();
    const [url, setUrl] = useState(`https://gateway.marvel.com/v1/public/${id}?ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316`)
    const[hero, setHero] = useState();

    useEffect(()=>{
        const fetch = async () => {
            const response = await axios.get(url)
            setHero(response.data.data.results[0])
        }
        fetch()
    }, [url])

    return(
        <>
        {
            state &&
            (!data)?(
                data.map(hero => {
                    return(
                <div>
                <div className="card-content">
                    <div>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero picture"></img>
                    </div>
                    <div>
                    <h2>{hero.name}</h2>
                        <p>{hero.description}</p>
                    </div>

                </div>
            </div>
                    )
                })
            ) : ''
        }
        </>
    )
}

export default HeroCard