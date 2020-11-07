import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import Register from './Register'
import RegisterConfirm from './RegisterConfirm'

import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'

function RegisterPage(props) {
    
    const [isError, setError] = useState({isError: false, message: ''})
    const [errorType, setErrorType] = useState()
    const [isUserCreated, setUserCreated] = useState(false)
    const [isUserConfirmed, setUserConfirmed] = useState(false)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [confirmationCode, setConfirmationCode] = useState()
    const [user, setUser] = useState()
    const [birthdate, setBirthdate] = useState()
    const [birthDay, setBirthDay] = useState("01")
    const [birthMonth, setBirthMonth] = useState("01")
    const [birthYear, setBirthYear] = useState()

    const signUp = async (props) => {

        const { username, password, email } = props;
        try {
            let passwordNumberRegEx = new RegExp('[0-9]')
            let passwordLetterRegEx = new RegExp('[a-z]')
            setBirthdate(birthMonth + "/" + birthDay + "/" + birthYear)
            setErrorType('local')
            if(email == undefined || !isValidEmail(email))
            {
                throw "You must provide a valid email address"
            }
            if(username == undefined || username.length < 3)
            {
                throw "Username must be at 3 three characters"
            }
            else if((birthDay == undefined) || (isNaN(birthDay)) || (birthDay > 31 ) || (birthDay < 1))
            {
                throw "Valid day of birth must be specified"
            }
            else if((birthMonth == undefined) || (isNaN(birthMonth)) || (birthMonth > 12 ) || (birthMonth < 1))
            {
                throw "Valid month of birth must be specified"
            }
            else if((birthYear == undefined) || (isNaN(birthYear)) || (birthYear < 1900) || (getAge(birthYear, birthMonth, birthDay) < 18)) 
            {
                throw "You must be at least 18 to sign up to this site"
            }
            else if(((password || passwordConfirm) == undefined) || ((password || passwordConfirm) == ""))
            {
                throw "Password must not be empty"
            }
            else if(password != passwordConfirm)
            {
                throw "Passwords must match!"
            }
            else if(password.length < 8)
            {
                throw "Password must be at least 8 characters"
            }
            else if(!((password.match(passwordNumberRegEx)) && (password.match(passwordLetterRegEx))))
            {
                throw "Password must contain lowercase characters and numbers"
            }
            else
            {
                setErrorType('aws')
                let response = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email,
                        birthdate,
                        preferred_username: username
                        //"custom:instagram":"Enter Instagram Account",
                        //"custom:facebook":"Enter Facebook Account",
                        //"custom:twitter":"Enter Twitter Account",
                        //"custom:job":"Enter Job Title",
                        //"custom:bio":"Tell everyone about yourself"
                    },
                })
                setUser(response)
                setUserCreated(true);
                console.log(response);
            }
        }
        catch (error) {
            console.log("Error: ", error);
            setError({isError: true, message: error});
        }
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

    function getAge(date) {
        var now = new Date();
        var birthDate = new Date(date)
        var currentAge = now.getFullYear() - birthDate.getFullYear();
        var currentMonth = now.getMonth() - birthDate.getMonth();
        if (currentMonth < 0 || (currentMonth === 0 && now.getDate() < birthDate.getDate()))
        {
            currentAge--
        }
        console.log("AGE: " + currentAge)
        return currentAge
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log("TESTING EMAIL: " + re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                   
            />
            {!isUserCreated && (
                <Register
                    setUsername={setUsername}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setPasswordConfirm={setPasswordConfirm}
                    setBirthdate={setBirthdate}
                    getUsername={username}
                    getEmail={email}
                    getPassword={password}
                    getPasswordConfirm={passwordConfirm}
                    getError={isError}
                    getBirthdate={birthdate}
                    signUp={signUp}
                    errorType={errorType}
                    setBirthDay={setBirthDay}
                    setBirthMonth={setBirthMonth}
                    setBirthYear={setBirthYear}
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