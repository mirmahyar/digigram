import React from 'react'
import { NavLink } from 'react-router-dom'
import Scarlett from '../../Pictures/scarlett.png'

function pacinoPage() {
    return (
        <div className="info-wrapper">
            <img className="info-img" src={Scarlett} alt="scarlett" />
            <h2>Name: Scarlett Jouhonson</h2>
            <h2>Tell: 001 999999999</h2>
            <h2>Address: New York , US</h2>

            <NavLink to="/">
            <button className="info-button" >Message</button>
            </NavLink>
        </div>
    )
}

export default pacinoPage
