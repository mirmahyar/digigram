import React from 'react'
import "./DisplayMessages.css"

function DisplayMessages(props) {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default DisplayMessages
