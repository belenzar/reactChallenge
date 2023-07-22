import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCard from "./HeroCard.jsx";
import './HeroList.css';
import NotFound from "./NotFound.jsx";

export const HeroList =({data}) => {
    let navigate = useNavigate();

    return (
        <>
        {
        (data)?(
            data.map(hero => {
                return(
                <div className="hero-card" key={hero.id} onClick={()=>navigate(`/${hero.id}`)}>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero picture"></img>
                    <div className="title">
                    <h2>{hero.name}</h2>
                    </div>
                    <HeroCard></HeroCard>
                </div>
                )
            })
        ) : <NotFound/>
    }
        </>
    )

}

export default HeroList

