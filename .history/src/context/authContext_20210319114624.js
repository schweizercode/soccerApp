import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        console.log(email, password)
        return auth.createUserWithEmailAndPassword(email, password)
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
                    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
                });

            // Atomically remove a region from the "regions" array field.
            washingtonRef.update({
                regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
            });

            db.collection("users").doc(currentUser.uid).set({
                Favoriteclub: favorite,
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    }



    // const docRef = db.collection("users").doc(currentUser.uid);

    // docRef.get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });


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
