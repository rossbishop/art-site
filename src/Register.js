import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import RegisterStyles from './css/register.module.css'
import cx from 'classnames'

import { Auth } from 'aws-amplify';

export default function Register(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className={RegisterStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Register</h1>
                        <label for="inputEmail" className="sr-only">Enter email address</label>
                        <input type="email" id="inputEmail" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Email Address" onChange={event => setEmail(event.target.value)} required autofocus/>
                        <label for="inputUsername" className="sr-only">Enter new username</label>
                        <input type="username" id="inputUsername" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" onChange={event => setUsername(event.target.value)} required autofocus/>
                        <label for="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" onChange={event => setPassword(event.target.value)} required autofocus/>
                        <label for="inputPasswordConfirm" className="sr-only">Enter password</label>
                        <input type="password" id="inputPasswordConfirm" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirm Password" required autofocus/>
                        <button className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onclick={signUp(email,username,password)}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

async function signUp(props) {
    var username=props.username
    var password=props.password
    var email=props.email
    var birth_date='01/01/1970'

    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                birth_date,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}