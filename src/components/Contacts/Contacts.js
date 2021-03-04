import React from "react";
import ContactInfo from "./ContactCard";
import Home from "../Home/Home";
import Deniro from "../../Pictures/Robert.png";
import Scarlett from "../../Pictures/scarlett.png";
import Pacino from "../../Pictures/pacino-circle.png";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import "./Contacts.css";

function Contacts() {
  return (
    <>
      <h1 className="ContactsHeader">CONTACTS</h1>
      <div className="ContactsWrapper">
        <Link to="/contacts/pacino">
          <ContactInfo name="Pacino" img={Pacino} />
        </Link>

        <Link to="/contacts/deniro">
          <ContactInfo name="Deniro" img={Deniro} />
        </Link>

        <Link to="/contacts/scarlett">
          <ContactInfo name="Scarlett" img={Scarlett} />
        </Link>
      </div>
    </>
  );
}

export default Contacts;
