import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import "./modal.css";

export function Modal({ onClose, body, heroId }) {
  const [data, setData] = useState([]);
  //fijate que declare url como una constante y no como un estado, porque no necesito que se renderice cada vez que cambia
  const url = `https://gateway.marvel.com/v1/public/characters/${heroId}/comics?ts=1&apikey=14b572098c0d78f84fd91619a3b9f2a6&hash=3708c7ce25ce998cfdde2fd3da6bd316`;

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url);
      setData(response.data.data.results);
    };
    fetch();
    //desabilito el scroll cuando se abre el modal
    document.body.style.overflow = "hidden";
    return () => {
      //habilito el scroll cuando se cierra el modal, no es la mejor implementacion pero es minimal functionality
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal">
      {data.length === 0 ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>Comics</h1>
          <ul>
            {data.map((comic) => {
              return <li>{comic.title}</li>;
            })}
          </ul>
          <button onClick={onClose} className="x">
            ❌
          </button>
        </div>
      )}
    </div>
  );
}
