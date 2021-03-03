import { Button } from '@material-ui/core';
import { MessageSharp } from '@material-ui/icons';
import React, {useState, useEffect, useRef} from 'react'
import "./Input.css"

function Input() {

    const [message,SetMessage] = useState("");
    const [messageArray,SetMessageArray] = useState([]);
    const [answer,SetAnswer]  = useState(false);
    
    const [submitted,SetSubmitted] = useState(false);
    const [clear,SetClear]= useState(false);
    const refMessage = useRef(null);

    const handleChange = (e) => {
        SetMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SetSubmitted(true);
        SetMessageArray([message])
        console.log(messageArray);
        setTimeout(() => {
            SetAnswer(true)
        }, 2000);
        }

        const handleClear = () => {
            SetMessage("");
            
        }

    

    

    return (
        <div className="wrapper">
            
            <div className="display">
            <p>{messageArray}</p>
            {answer ? <p>Hi ... ! This is your answer after 2 seconds ! </p> : null}
            </div>

            
            <form className="form" onSubmit={handleSubmit}>
            <input
            type="text" id="input" name="input"
            value={message}
            
            placeholder="Write a message"
            onChange= {handleChange}
            />
            <input type="submit" value="Send"/>
            <Button onClick = {handleClear}>Clear</Button>
            
            </form>

            
            
            

            

            
            

            
        </div>
    )
}

export default Input
