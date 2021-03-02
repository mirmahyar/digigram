import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"
import Pacino from '../../Pictures/pacino-circle.png'

function Header() {
    return (
        <div className = "header-wrapper">
            <div className="header">

                <MenuIcon className="hamburger" fontSize="large"/>
                
            </div>

            <img className="profile-picture" src={Pacino} alt="pacino" />

            
        </div>
    )
}

export default Header
