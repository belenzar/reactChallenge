import React from "react";
import './Search.css'
import {useState} from "react";

const Search = ({search}) =>{
    const[text, setText] = useState('')
    const onSearch = (q) => {
        setText(q)
        search(q)
    }
 
    return(
        <section className="search">
            <h1 className="header_title">Marvel</h1>
            <form>
            <input type="text" className="search-bar" placeholder="Search your Hero" autoFocus onChange={(e) => onSearch(e.target.value)} value={text} />
            </form>
        </section>
    )
}

export default Search