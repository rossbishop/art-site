import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import Forgot from './Forgot'
import RegisterConfirm from './RegisterConfirm'
import ForgotReset from './ForgotReset'

import { Auth } from 'aws-amplify'

function ForgotPage() {

    const [isSuccess, setSuccess] = useState({isSuccess: false, message: ''})
    const [isError, setError] = useState({isError: false, message: ''})
    const [isConfirm, setConfirm] = useState(false)
    const [isReset, setReset] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isUserConfirmed, setUserConfirmed] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState('')

    const forgotPassword = (props) => {
        console.log(props)
        Auth.forgotPassword(props)
            .then((data) => {
                console.log(data);
                setSuccess({isSuccess: true, message: "Verification code resent successfully - Check your email"});
                setTimeout(() => {setReset(true)}, 3000);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const forgotPasswordSubmit = (props) => {
        // Collect confirmation code and new password, then
        Auth.forgotPasswordSubmit(props.username, props.code, props.new_password)
            .then(data => { 
                console.log(data);
                setSuccess({isSuccess: true, message: "Password reset successfully - Login using new password"});
            })
            .catch(err => { 
                console.log(err);
                setError({isError: true, message: err});
            });
    }

    const resendConfirmationCode = async (props) => {
        await Auth.resendSignUp(props)
        .then((response) => {
            console.log('code resent successfully');
            setSuccess({isSuccess: true, message: "Verification Code Resent Successfully - Check your email"});
            setTimeout(() => { setConfirm(true) }, 3000);
        })
        .catch((err) => {
            console.log('error resending code: ', err);
            setError({isError: true, message: err});
        });
    }

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
    }

    return (
        <>
            <Header />
            {isReset &&
                <ForgotReset
                    setConfirmationCode={setConfirmationCode}
                    getConfirmationCode={confirmationCode}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                    setPassword={setPassword}
                    getPassword={password}
                    getSuccess={isSuccess}
                    getError={isError}
                />
            }
            {!isConfirm &&
                <Forgot 
                    getError={isError}
                    getSuccess={isSuccess}
                    getUsername={username}
                    setUsername={setUsername}
                    resendConfirmation={resendConfirmationCode}
                    forgotPassword={forgotPassword}
                />
            }
            {isConfirm &&
                <RegisterConfirm
                    confirmSignUp={confirmSignUp}
                    getConfirmationCode={confirmationCode}
                    getUsername={username}
                    setConfirmationCode={setConfirmationCode}
                    getUserConfirmed={isUserConfirmed}                    
                />
            }

            <Footer /> 
        </>
    )
}

export default ForgotPage