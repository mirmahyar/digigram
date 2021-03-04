import React from 'react'
import ContactInfo from './ContactCard'
import Home from "../Home/Home"
import Deniro from "../../Pictures/Robert.png"
import Scarlett from "../../Pictures/scarlett.png"
import Pacino from "../../Pictures/pacino-circle.png"
import {Link, Switch, BrowserRouter, Route} from "react-router-dom";
import "./Contacts.css"
import ContactInfoPage from './ContactInfoPage/ContactInfoPage'

function Contacts() {
    return (
        <>

        <h1 className="ContactsHeader">CONTACTS</h1>
        <div className="ContactsWrapper">
            

            <Link to="/"> 
            
            <ContactInfo name="Deniro" img = {Deniro}/>
            
            <ContactInfo name = "Scarlett" img = {Scarlett} />
            <ContactInfo name="Pacino" img={Pacino} />
            </Link>
        </div>

        <BrowserRouter>
        
        </BrowserRouter>
        </>
    )
}

export default Contacts
