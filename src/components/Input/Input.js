import React, {useState} from 'react'

function Input() {

    const [message,SetMessage] = useState("");

    return (
        <div>
            <input
            type="text" id="input" name="input"
            value={SetMessage}
            placeholder="Write a message"/>

            
        </div>
    )
}

export default Input
