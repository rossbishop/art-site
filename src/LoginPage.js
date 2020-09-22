import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import Login from './Login'

import { Auth } from 'aws-amplify';

function LoginPage() {

    const [isError, setError] = useState({isError: false, message: ''})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (props) => {

        await Auth.signIn(username, password)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log('error signing in', error);
            setError({isError: true, message: error});
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
            />
            <Footer /> 
        </>
    )
}

export default LoginPage