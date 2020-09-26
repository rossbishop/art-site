import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import Login from './Login'
import { useHistory } from "react-router-dom";

import { Auth } from 'aws-amplify';

function LoginPage(props) {

    const [isError, setError] = useState({isError: false, message: ''})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState({isSuccess: false, message: ''})
    const history=useHistory();

    function getRedirectPage() {
        history.goBack();
    }

    const signIn = async (props) => {

        await Auth.signIn(username, password)
        .then((response) => {
            console.log('Signed in: ');
            console.log(response);
            setSuccess({isSuccess: true, message: "You are now logged in. Redirecting to previous page..."})
            setTimeout(() => {getRedirectPage();}, 3000);
        })
        .catch((error) => {
            console.log('error signing in', error);
            console.log(error.message)
            setError({isError: true, message: error.message});
        });
    }

    return (
        <>
            <Header />
            <Login 
                setUsername={setUsername}
                setPassword={setPassword}
                setError={setError}
                getError={isError}
                signIn={signIn}
                getSuccess={success}
            />
            <Footer /> 
        </>
    )
}

export default LoginPage