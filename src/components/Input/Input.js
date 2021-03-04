import { Button } from "@material-ui/core";
import { MessageSharp } from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import "./Input.css";
import PersonIcon from "@material-ui/icons/Person";
import ProfilePic from '../../Pictures/profile-pic.png';

function Input() {
  const [message, SetMessage] = useState("");
  const [messageArray, SetMessageArray] = useState([]);
  const [answer, SetAnswer] = useState(false);

  const [submitted, SetSubmitted] = useState(false);
  const [clear, SetClear] = useState(false);
  const refMessage = useRef(null);

  const handleChange = (e) => {
    SetMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetSubmitted(true);
    SetMessageArray([message]);
    console.log(messageArray);
    setTimeout(() => {
      SetAnswer(true);
    }, 2000);
  };

  const handleClear = () => {
    SetMessage("");
    SetMessageArray([]);
    SetAnswer(false);
  };

  return (
    <div className="wrapper">
      <div className="display">
        <div className="iconPlusMessage">
          {submitted ? <PersonIcon className="icon" /> : null}
          <p>{messageArray}</p>
        </div>

        {answer ? (
          <div className="iconPlusMessage">
            {" "}
            <img
              className="profile-picture-small"
              src={ProfilePic}
              alt="pacino"
            />{" "}
            <p>Hi ... ! This is your answer after 2 seconds ! </p>
          </div>
        ) : null}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          id="input"
          name="input"
          value={message}
          placeholder="Write a message"
          onChange={handleChange}
        />

        <input className="submitButton" type="submit" value="SEND" />
        <Button className="clearButton" onClick={handleClear}>Clear</Button>
      </form>
    </div>
  );
}

export default Input;
