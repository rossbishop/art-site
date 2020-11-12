import React, { useState } from 'react';

import Header from './Header'
import Footer from './Footer'
import Forgot from './Forgot'
import RegisterConfirm from './RegisterConfirm'
import ForgotReset from './ForgotReset'

import { Auth } from 'aws-amplify'

function ForgotPage(props) {

    const [isSuccess, setSuccess] = useState({isSuccess: false, message: ''})
    const [isError, setError] = useState({isError: false, message: ''})
    const [isForgot, setForgot] = useState(true)
    const [isConfirm, setConfirm] = useState(false)
    const [isReset, setReset] = useState(false)
    const [isResetComplete, setResetComplete] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isUserConfirmed, setUserConfirmed] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState('')

    const forgotPassword = (props) => {
        Auth.forgotPassword(props)
            .then((data) => {
                setSuccess({isSuccess: true, message: "Verification code resent successfully - Check your email"});
                setTimeout(() => { setSuccess({isSuccess: false, message: ""});setForgot(false);setReset(true); }, 3000);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const forgotPasswordSubmit = (props) => {
        // Collect confirmation code and new password, then
        Auth.forgotPasswordSubmit(props.username, props.code, props.new_password)
            .then(data => { 
                setSuccess({isSuccess: true, message: "Password reset successfully - Login using new password"});
                setTimeout(() => { setResetComplete(true) }, 3000);
            })
            .catch(err => { 
                console.log(err);
                setError({isError: true, message: err});
            });
    }

    const resendConfirmationCode = async (props) => {
        await Auth.resendSignUp(props)
        .then((response) => {
            setSuccess({isSuccess: true, message: "Verification Code Resent Successfully - Check your email"});
            setTimeout(() => { setForgot(false);setConfirm(true); }, 3000);
        })
        .catch((err) => {
            console.log('error resending code: ', err);
            setError({isError: true, message: err.message});
        });
    }

    const confirmSignUp = async (props) => {
        const { username, confirmationCode } = props;
        await Auth.confirmSignUp(username, confirmationCode)
        .then((response) => {
            setUserConfirmed(true);
            console.log(response);
        })
        .catch((error) => {
            console.log('error confirming sign up: ', error);
            setError({isError: true, message: error.message})
        });
    }

    return (
        <>
            <Header 
                userAttribs={props.userAttribs}
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                   
            />
            {isReset &&
                <ForgotReset
                    setConfirmationCode={setConfirmationCode}
                    getConfirmationCode={confirmationCode}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                    setPassword={setPassword}
                    getPassword={password}
                    getSuccess={isSuccess}
                    getError={isError}
                    getUsername={username}
                    isResetComplete={isResetComplete}
                    setResetComplete={setResetComplete}
                />
            }
            {!isConfirm && isForgot &&
                <Forgot 
                    getError={isError}
                    getSuccess={isSuccess}
                    getUsername={username}
                    setUsername={setUsername}
                    resendConfirmation={resendConfirmationCode}
                    forgotPassword={forgotPassword}
                    setForgot={setForgot}
                />
            }
            {isConfirm &&
                <RegisterConfirm
                    confirmSignUp={confirmSignUp}
                    getConfirmationCode={confirmationCode}
                    getUsername={username}
                    setConfirmationCode={setConfirmationCode}
                    getUserConfirmed={isUserConfirmed}
                    getErrorMessage={isError.message} 
                    getError={isError.isError}                   
                />
            }

            <Footer /> 
        </>
    )
}

export default ForgotPage