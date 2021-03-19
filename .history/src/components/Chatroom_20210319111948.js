import React, { useEffect, useState, useContext } from 'react'
import { ChatContext } from '../context/chatContext'
import { AuthContext } from '../context/authContext'
import Cluboverview from '../Cluboverview'

const flexContainer = { display: 'flex', flexWrap: 'wrap' }

//create List
const ChatRoom = () => {
    const { messages, writeMessage } = useContext(ChatContext)
    const { isAuthenticated } = useContext(AuthContext)
    const [body, setBody] = useState('')

    const handleOnChange = (e) => {
        setBody(e.target.value)
    }
    const handleWriteMessages = () => {
        writeMessage(body)

    }
    console.log('messages', messages)
    return (
        <div style={flexContainer} >
            <input type="text" placeholder='message' value={body} onChange={handleOnChange} />
            <button onClick={handleWriteMessages} >add message</button>
            {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
            {messages ? messages.map((message, index) => {
                return (
                    <div>
                        <h5>{message.userName}</h5>
                        <h6>{message.timestamp.toString()}</h6>
                        <p>{message.body}</p>
                    </div>
                )
            }) : <h2>Loading...</h2>}
        </div>
    )
}

export default ChatRoom