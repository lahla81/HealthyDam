import React from "react";
import { signInWithGooglePopup, createUserDocumentrFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentrFromAuth(user);
    }
    return (
        <div>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )
}

export default SignIn;