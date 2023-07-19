import React from "react";
import './HeroList.css';

export const HeroList =({data}) => {
    return (
        <>
        {
        (data)?(
            data.map(hero => {
                return(
                <div className="hero-card">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero picture"></img>
                    <div className="title">
                        <h2>{hero.name}</h2>
                        <p>Agregar Descripción</p>
                    </div>
                </div>
                )
            })
        ) : ''
    }
        </>
    )

}

export default HeroList