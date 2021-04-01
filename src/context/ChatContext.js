import React, { createContext, useState } from 'react';
import { useAuth } from './AuthContext';
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js"


const initContext = {
    messages: [],
    getMessages: () => {
        throw new Error('getMessages() not implemented')
    },
    writeMessages: () => {
        throw new Error('writeMessages() not implemented')
    },

}


export const ChatContext = createContext(initContext)

export const ChatContextProvider = ({ children }) => {

    const { currentUser } = useAuth()
    const [messages, setMessages] = useState(initContext.messages)
    let history = useHistory()
    const db = firebase.firestore();


    function getMessages(idTeam) {

        db.collection(idTeam).get().then((querySnapshot) => {
            const messagesArray = []

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                messagesArray.push(doc.data())
            });
            console.log('messagesArray', messagesArray)
            setMessages(messagesArray)
        });

    }

    const writeMessages = async (teamid, body) => {
        // Add a new document with a generated id.

        db.collection(teamid).add({
            body,
            userEmail: currentUser.email,
            timestamp: new Date()
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                getMessages(teamid)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    }

    return (
        <ChatContext.Provider value={{ messages, getMessages, writeMessages }}>
            {children}
        </ChatContext.Provider>
    )

}

