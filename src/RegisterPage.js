import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import Register from './Register'
import RegisterConfirm from './RegisterConfirm'

import { Auth } from 'aws-amplify';

function RegisterPage() {
    
    const [isError, setError] = useState({isError: false, message: ''})
    const [isUserCreated, setUserCreated] = useState(false)
    const [isUserConfirmed, setUserConfirmed] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')

    const signUp = async (props) => {
        const { username, password, email } = props;
        const birthdate = "01/01/1970";
        await Auth.signUp({
        username,
        password,
        attributes: {
            email,
            birthdate,
            preferred_username: username,
        },
        })
        .then((response) => {
            setUserCreated(true);
            //setUsername(response.user.username)
            console.log(response);
        })
        .catch((error) => {
            console.log("Error: ", error);
            setError({isError: true, message: error});
        });
    };   

    const confirmSignUp = async (props) => {
        console.log('Confirming...')
        const { username, confirmationCode } = props;
        await Auth.confirmSignUp(username, confirmationCode)
        .then((response) => {
            setUserConfirmed(true);
            console.log(response);
        })
        .catch((error) => {
            console.log('error confirming sign up: ', error);
            setError({isError: true, message: error})
        });
    };

    return (
        <>
            <Header />
            {!isUserCreated && (
                <Register
                    setUsername={setUsername}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    getUsername={username}
                    getEmail={email}
                    getPassword={password}
                    getError={isError}
                    signUp={signUp}
                />)
            }
            {isUserCreated && (
                <RegisterConfirm
                    confirmSignUp={confirmSignUp}
                    getConfirmationCode={confirmationCode}
                    getUsername={username}
                    setConfirmationCode={setConfirmationCode}
                    getUserConfirmed={isUserConfirmed}
                />
                    // <div className="alert alert-success" role="alert">User account has been created.</div>
                )
            }
            {/* {isError.isError && (
                <div className="alert alert-danger" role="alert">{isError.message.log}</div>)
            } */}
            <Footer /> 
        </>
    )
}

export default RegisterPage