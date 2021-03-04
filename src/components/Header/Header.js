import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import ProfilePic from '../../Pictures/profile-pic.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className = "header-wrapper">
           

                <MenuIcon className="hamburger" fontSize="large"/>
                <div className="headerLinks">
                <Link to='/contacts' className='headerLink'>Contacts</Link>
                <Link to='/chats' className='headerLink'>Chats</Link>
                </div>
                <Link to='/contacts'>
                <img className="profile-picture" src={ProfilePic} alt="pacino" />
                </Link>
                <h2 className="header-title">DigiGram</h2>
                
          

            

            
        </div>
    )
}

export default Header
