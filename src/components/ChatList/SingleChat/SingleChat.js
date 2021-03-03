import React from "react";
import { Link } from "react-router-dom";
import Pacino from "../../../Pictures/pacino-circle.png";
import "./SingleChat.css";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

function SingleChat() {
  return (
    <Link to="/">
      <div className="SingleChat">
        <img className="profile-picture" src={Pacino} alt="Pacino" />
        <p>This is the last message in this chat</p>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </div>
    </Link>
  );
}

export default SingleChat;
