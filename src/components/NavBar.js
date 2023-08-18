import React, { useState } from 'react'
import { Search, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { searchMovies } from '../state/action-creators';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const [text, setText] = useState("");
    const handleClick = useDispatch();
    const location = useLocation();
    const handleKeypress = e => {
      if (e.keyCode === 13) {
        handleClick(searchMovies(text))
      }
    };

    return (
        <nav className="navbar shadow shadow-sm">
          {location.pathname==="/" ?
            <div className="input-box">
                <Search className="search-btn" onClick={() => { handleClick(searchMovies(text)) }} />
                <input
                    type="search"
                    placeholder="Search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeypress}
                    />
            </div>:
            <div>
              <h5 className="details-title">Movie Details</h5>
            </div>}
            <Home className="home-btn me-3" />
        </nav>
    )
}

export default NavBar