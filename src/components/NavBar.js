import React, { useState } from 'react'
import { Search, Home } from '@mui/icons-material';

const Search_API = process.env.REACT_APP_API_SEARCH;
const API_KEY = process.env.REACT_APP_API_KEY;

const NavBar = () => {
    const [ text, setText ] = useState("");
    const URL = `${Search_API}${text}&api_key=${API_KEY}`;
    const searchKeyword = async() => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    }

    return (
        <nav className="navbar shadow shadow-sm">
            <div className="input-box ps-2 ms-2">
                <Search onClick={searchKeyword}/>
                <input type="text" placeholder="Search" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <Home className="home-btn me-2"/>
        </nav>
    )
}

export default NavBar