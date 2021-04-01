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
    const [favorites, setFavorites] = useState([])

    function signup(email, password) {
        console.log(email, password)

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user
                console.log(user)

                db.collection("users").doc(user.uid).set({
                    Favoriteclub: []
                })
                    .then(() => {
                        console.log("Document successfully written!");
                        return user
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });


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

            console.log(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    useEffect(() => {

        if (currentUser) {
            getFavorite()
        }

    }, [currentUser])


    function addtoFavorites(favorite) {
        console.log(currentUser)
        // Add a new document in collection "cities"
        if (currentUser) {

            db.collection("users").doc(currentUser.uid)

                // Atomically add a new region to the "regions" array field.
                .update({
                    Favoriteclub: firebase.firestore.FieldValue.arrayUnion(favorite)
                })

                .then(() => {
                    getFavorite()
                })
        }
    }


    function getFavorite() {

        var docRef = db.collection("users").doc(currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                const document = doc.data()
                setFavorites(document.Favoriteclub)

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);

        });

    }

    function deleteFavorites(favorite) {
        console.log(currentUser)
        // Add a new document in collection "cities"
        if (currentUser) {

            db.collection("users").doc(currentUser.uid)

                // Atomically add a new region to the "regions" array field.
                .update({
                    Favoriteclub: firebase.firestore.FieldValue.arrayRemove(favorite)
                })

                .then(() => {
                    getFavorite()
                })
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
        deleteFavorites,
        favorites,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
