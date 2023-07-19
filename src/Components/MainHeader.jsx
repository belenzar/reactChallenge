import React from "react"
import { useState, useEffect } from "react";
import './MainHeader.css'
import HeroList from "./HeroList.jsx"
import axios from "axios";

function MainHeader() {
    const [url, setUrl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316')
    const [hero, setHero] = useState();

    useEffect(()=>{
        const fetch = async () => {
            const response = await axios.get(url)
            setHero(response.data.data.results)
        }
        fetch()
    }, [url])

    return(
        <> <div className="header">
            <h1 className="header_title">Marvel</h1>
            <input type="search" className="search-bar" placeholder="Search your Hero"/>
           
        </div>
        <div className="container">
            {
                (!hero)? <p>Hero not Found</p> : <HeroList data= {hero}></HeroList>
            }
        </div>
    </>
    )
}

export default MainHeader

//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316