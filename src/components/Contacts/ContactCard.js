import React from 'react'
import "./Contacts.css"

function ContactCard(props) {
    return (
        <div className="ContactsInfoWrapper">
            
            <img className="profile-picture" src = {props.img} />
            <p className="contactName">{props.name}</p>
            
            <p>Last seen recently</p>
        </div>
    )
}

export default ContactCard;
