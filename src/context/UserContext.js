import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Email Sign Up
    const SignUpUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Email Sign In
    const SignInUsingEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update Profile
    const profileUpdate = () => {
        updateProfile(auth.currentUse)
    }


    //Email SignOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    } 

    //Verify Email
    const verifyEmailAddress = () => {
        return sendEmailVerification(auth.currentUser);
    }

    //Google Login
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    //Observe User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const authValue = { user, loading, SignUpUsingEmail,  SignInUsingEmail, logOut, verifyEmailAddress, googleLogin, profileUpdate};

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;