import React from 'react'
import { Search, Home } from '@mui/icons-material';

const NavBar = () => {
    return (
        <nav className="navbar shadow shadow-sm">
            <div className="input-box ps-2 ms-2">
                <Search />
                <input type="search" placeholder="Search" />
            </div>
            <Home className="home-btn me-2"/>
        </nav>
    )
}

export default NavBar