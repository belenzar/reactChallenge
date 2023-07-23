import React from "react";
import { useState, useEffect } from "react";
import "./MainHeader.css";
import Search from "./Search.jsx";
import HeroList from "./HeroList.jsx";
import NotFound from "./NotFound.jsx"  
import axios from "axios";
 
function MainHeader() {
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316"
  );
  const [hero, setHero] = useState();
  const [query, setQuery] = useState("");

  /* useEffect(()=>{
        const fetch = async () => {
            const response = await axios.get(url)
            setHero(response.data.data.results)
        }
        fetch()
    }, [url])*/

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        const response = await axios.get(url);
        setHero(response.data.data.results);
      } else {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316`);
        setHero(response.data.data.results);
    }
    }; fetch()}, [query]);

  return (
    <>
      <Search search={(q) => setQuery(q)} />
      <div className="container">
        {!hero ? <NotFound/> : <HeroList data={hero}></HeroList>}
      </div>
    </>
  );
}

export default MainHeader;
