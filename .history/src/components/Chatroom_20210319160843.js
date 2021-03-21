import React, { useEffect, useState, useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { useAuth } from '../context/AuthContext'
import Cluboverview from '../Cluboverview'

const flexContainer = { display: 'flex', flexWrap: 'wrap' }

//create List
const ChatRoom = () => {
    const { messages, writeMessages } = useContext(ChatContext)
    const { currentUser } = useAuth()
    const [body, setBody] = useState('')

    const handleOnChange = (e) => {
        setBody(e.target.value)
    }

    const handleWriteMessages = () => {
        writeMessages(body)
    }

    console.log('messages', messages)
    return (
        <div style={flexContainer} >
            <h1> Comments</h1>
            <input type="text" placeholder='message' value={body} onChange={handleOnChange} />
            <button onClick={handleWriteMessages} >add message</button>
            {currentUser ? <p>Authenticated</p> : <p>Not Authenticated</p>}
            {messages ? messages.map((message, index) => {
                return (
                    <div>
                        <h5>{message.userEmail}</h5>
                        <h6>{message.timestamp.toString()}</h6>
                        <p>{message.body}</p>
                    </div>
                )
            }) : <h2>Loading...</h2>}
        </div>
    )
}

export default ChatRoom