import { createContext, useState } from 'react';
import firebase from '../config'


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {


    const [user, setUser] = useState(null)


    const register = ({ email, password, name }) => {
        // const email = state.email
        //destructuring properties from an object
        // const {email, password} = state


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;


                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    console.log('user', user)
                    console.log('Update successful')
                    setUser(user)
                }).catch(function (error) {
                    console.log(error)
                });

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('errorMessage', errorMessage)
            });
    }

    const login = ({ email, password }) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('user', user)
                setUser(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('error', error)
            });
    }


    return (
        <AuthContext.Provider value={{ user, register, login }}>
            {children}
        </AuthContext.Provider>
    )
}