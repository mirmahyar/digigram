import React, {useState} from 'react'

function Input() {

    const [message,SetMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert('You submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text" id="input" name="input"
            value={message}
            placeholder="Write a message"
            onChange= {(e)=>{
                SetMessage(e.target.value)
            }}
            />
            <input type="submit" value="Send"/>
            </form>
            <p>{message}</p>
            

            
        </div>
    )
}

export default Input
