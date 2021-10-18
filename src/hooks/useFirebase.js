import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,

    signOut
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [error, setError] = useState();
    const auth = getAuth();


    const registerWithEmailPassword = (name, email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(result => { })
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const logInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }



    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    const signInWithGithub = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    };

    //log out

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    //observing state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);


    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        registerWithEmailPassword,
        logInWithEmailPassword,
        logOut
    }
};

export default useFirebase;