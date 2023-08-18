import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    return (
        <nav className="navbar shadow shadow-sm">
            <div className="input-box ps-2 ms-2">
                <SearchIcon />
                <input type="search" placeholder="Search" />
            </div>
            <HomeIcon className="home-btn me-2"/>
        </nav>
    )
}

export default NavBar