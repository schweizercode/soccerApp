import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './authContext';
import { useHistory } from "react-router-dom";
// 2 create config.js, import and gitignore
import firebase from "../firebaseConfig"


const initContext = {
    messages: [],
    getMessages: () => {
        throw new Error('getMessages() not implemented')
    },
    writeMessages: () => {
        throw new Error('writeMessages() not implemented')
    },

}

// 3 Login & Register components
//update router and wrap auth provider

export const ChatContext = createContext(initContext)


export const ChatContextProvider = ({ children }) => {

    const (currentUser) = useAuth()
    const [messages, setMessages] = useState(initContext.messages)
    let history = useHistory()
    // const { user } = useContext(AuthContext)
    const db = firebase.firestore();

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = () => {

        db.collection("messages").get().then((querySnapshot) => {
            const messagesArray = []

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                messagesArray.push(doc.data())
            });
            console.log('messagesArray', messagesArray)
            setMessages(messagesArray)

        });

    }

    const writeMessages = async (body) => {
        // Add a new document with a generated id.

        db.collection("messages").add({
            body,
            userEmail: currentUser.email,
            timestamp: new Date()
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                getMessages()
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

