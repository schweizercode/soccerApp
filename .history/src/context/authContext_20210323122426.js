import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        console.log(email, password)
        const user = auth.createUserWithEmailAndPassword(email, password)
        console.log(user)


        db.collection("users").doc(user.uid).set({
            Favoriteclub: []
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        return user


    }

    function login(email, passwword) {
        return auth.signInWithEmailAndPassword(email, passwword)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })

        return unsubscribe
    }, [])


    function addtoFavorites(favorite) {
        console.log(currentUser)
        // Add a new document in collection "cities"
        if (currentUser) {

            db.collection("users").doc(currentUser.uid)

                // Atomically add a new region to the "regions" array field.
                .update({
                    Favoriteclub: firebase.firestore.FieldValue.arrayUnion(favorite)
                });
        }
    }


    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        addtoFavorites,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
