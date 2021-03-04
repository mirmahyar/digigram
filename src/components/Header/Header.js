import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"
import Pacino from '../../Pictures/pacino-circle.png'

function Header() {
    return (
        <div className = "header-wrapper">
           

                <MenuIcon className="hamburger" fontSize="large"/>
                <img className="profile-picture" src={Pacino} alt="pacino" />
                <h2 className="header-title">DigiGram</h2>
                
          

            

            
        </div>
    )
}

export default Header
