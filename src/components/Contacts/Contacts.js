import React from 'react'
import ContactInfo from './ContactInfo'
import Deniro from "../../Pictures/Robert.png"
import Scarlett from "../../Pictures/scarlett.png"
import Pacino from "../../Pictures/pacino-circle.png"
import "./Contacts.css"

function Contacts() {
    return (
        <>

        <h1 className="ContactsHeader">CONTACTS</h1>
        <div className="ContactsWrapper">
            
            <ContactInfo name="Deniro" img = {Deniro}/>
            <ContactInfo name = "Scarlett" img = {Scarlett} />
            <ContactInfo name="Pacino" img={Pacino} />
        </div>
        </>
    )
}

export default Contacts
