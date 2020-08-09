import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="InstagramLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2JK42TiBH9apltQsgx9B5-qDGkeB9JvZ1dg&usqp=CAU" alt="Instagram" />
            <div className="searchbar">

                <SearchIcon />

                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    )
}

export default Header
