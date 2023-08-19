import React, { useState } from 'react'
import { Search, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { searchMovies } from '../state/action-creators';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [text, setText] = useState("");
  const handleClick = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //function to call API to fetch movies related to search on pressing the enter
  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleClick(searchMovies(text, 1));
      setText('');
    }
  };

  //function to go back to home page which is listpage
  const goToHomePage = () => {
    navigate("/");
  }

  return (
    <nav className="navbar shadow shadow-sm">
      {/* NavBar is common for both pages however Searchbar only appears in listpage */}
      {location.pathname === "/" ?
        <div className="input-box">
          <Search className="search-btn"
            onClick={() => {
              //function to call API to fetch movies related to search
              handleClick(searchMovies(text, 1));
              setText('');
            }}
          />
          <input
            type="search"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeypress}
          />
        </div> :
        <div>
          <h5 className="details-title">Movie Details</h5>
        </div>}
      <Home className="home-btn me-3" onClick={goToHomePage} />
    </nav>
  )
}

export default NavBar