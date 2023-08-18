import React, { useState } from 'react'
import { Search, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { searchMovies } from '../state/action-creators';

const NavBar = () => {
    const [ text, setText ] = useState("");
    const handleClick = useDispatch();

    return (
        <nav className="navbar shadow shadow-sm">
            <div className="input-box">
                <Search onClick={()=> {handleClick(searchMovies(text))}}/>
                <input type="text" placeholder="Search" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <Home className="home-btn me-3"/>
        </nav>
    )
}

export default NavBar