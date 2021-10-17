import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,

    signOut
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();


    const singInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
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
        singInWithGoogle,

        logOut
    }
};

export default useFirebase;