import React from 'react'
import SingleChat from './SingleChat/SingleChat'
import "./ChatList.css"

function ChatList() {
    return (
        <>
        <h1 className="chatsHeader">Chats</h1>
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        </>
    )
}

export default ChatList
