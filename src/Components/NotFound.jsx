import React from "react";
import "./NotFound.css";

function NotFound() {

    return (
        <div className="notFound">
            <img src="../../assets/deadpool.png" alt="Crying Deadpool" />
            <h2 className="notFound-title">Oops!</h2>
            <p>Sorry, hero not found!</p>
        </div>
    );
}

export default NotFound