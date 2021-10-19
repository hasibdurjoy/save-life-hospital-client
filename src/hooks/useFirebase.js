import  { useEffect, useState } from 'react';
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

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerWithEmailPassword = (name, email, password, redirect_url, history) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        history.push(redirect_url);
                        window.location.reload();
                    })
            })
            .finally(() => { setIsLoading(false) })
            .catch((error) => {
                setError(error.message);
            });
    }

    const logInWithEmailPassword = (email, password, redirect_url, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_url);
                setError('')
            })
            .finally(() => { setIsLoading(false) })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingGoogle = (redirect_url, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }

    const signInUsingGithub = (redirect_url, history) => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }
    return {
        user,
        isLoading,
        setUser,
        signInUsingGoogle,
        signInUsingGithub,
        registerWithEmailPassword,
        logInWithEmailPassword,
        logOut
    }
};

export default useFirebase;