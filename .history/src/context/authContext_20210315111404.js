import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
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
            setLoading(false)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}







// export const AuthContext = createContext()

// export const AuthContextProvider = ({ children }) => {


//     const [user, setUser] = useState(null)


//     const register = ({ email, password, name }) => {
//         // const email = state.email
//         //destructuring properties from an object
//         // const {email, password} = state


//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 var user = userCredential.user;

//                 user.updateProfile({
//                     displayName: name,
//                 }).then(function () {
//                     console.log('user', user)
//                     console.log('Update successful')
//                     setUser(user)
//                 }).catch(function (error) {
//                     console.log(error)
//                 });

//             })
//             .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log('errorMessage', errorMessage)
//             });
//     }

//     const login = ({ email, password }) => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 // Signed in
//                 var user = userCredential.user;
//                 console.log('user', user)
//                 setUser(user)
//             })
//             .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log('error', error)
//             });
//     }


//     return (
//         <AuthContext.Provider value={{ user, register, login }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }


