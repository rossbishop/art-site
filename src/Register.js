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
                        <label htmlFor="inputEmail" className="sr-only">Enter email address</label>
                        <input type="email" id="inputEmail" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Email Address" onChange={event => setEmail(event.target.value)} required autoFocus/>
                        <label htmlFor="inputUsername" className="sr-only">Enter new username</label>
                        <input type="username" id="inputUsername" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" onChange={event => setUsername(event.target.value)} required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" onChange={event => setPassword(event.target.value)} required autoFocus/>
                        <label htmlFor="inputPasswordConfirm" className="sr-only">Enter password</label>
                        <input type="password" id="inputPasswordConfirm" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirm Password" required autoFocus/>
                        <button className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={() => {signUp({email,username,password})}}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

async function signUp(props) {
    const {username, password, email} = props
    var birthdate='01/01/1970'
    var preferred_username=props.username

    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,         
                birthdate,
                preferred_username,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}