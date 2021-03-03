import { MessageSharp } from '@material-ui/icons';
import React, {useState, useEffect, useRef} from 'react'
import DisplayMessages from '../DisplayMessages/DisplayMessages'

function Input() {

    const [message,SetMessage] = useState("");
    const [messageArray,SetMessageArray] = useState([]);
    const [answer,SetAnswer]  = useState("");
    
    const [submitted,SetSubmitted] = useState(false);
    const [clear,SetClear]= useState(false);
    const refMessage = useRef(null);

    const handleChange = (e) => {
        SetMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SetSubmitted(true);
        SetMessageArray([...message])
        setTimeout(() => {
            SetAnswer("Hi ! This is your answer after 2 seconds!")
        }, 2000);


        

    }

    

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text" id="input" name="input"
            //value={message}
            
            placeholder="Write a message"
            onChange= {handleChange}
            />
            <input type="submit" value="Send"/>
            
            </form>

            <p>{messageArray}</p>
            <p>{answer}</p>
            
            

            

            
            

            
        </div>
    )
}

export default Input
