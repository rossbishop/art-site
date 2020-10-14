import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import RegisterStyles from './css/register.module.css'
import cx from 'classnames'

export default function Register(props) {

    const username=props.getUsername
    const email=props.getEmail
    const password=props.getPassword
    const birthdate=props.getBirthdate

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className={RegisterStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Register</h1>
                        {props.getError.isError && (
                            <div className="alert alert-danger" role="alert">{props.getError.message.log}</div>)
                        }
                        <label htmlFor="inputEmail" className="sr-only">Enter email address</label>
                        <input type="email" id="inputEmail" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Email Address" onChange={event => props.setEmail(event.target.value)} required autoFocus/>
                        <label htmlFor="inputUsername" className="sr-only">Enter new username</label>
                        <input type="username" id="inputUsername" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" onChange={event => props.setUsername(event.target.value)} required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Enter password</label>
                        <input type="birthdate" id="inputBirthdate" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Birthdate (mm/dd/yyyy)" onChange={event => props.setBirthdate(event.target.value)} required autoFocus/>
                        <label htmlFor="inputBirthdate" className="sr-only">Enter birthdate</label>
                        <input type="password" id="inputPassword" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" onChange={event => props.setPassword(event.target.value)} required autoFocus/>
                        <label htmlFor="inputPasswordConfirm" className="sr-only">Enter password</label>
                        <input type="password" id="inputPasswordConfirm" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirm Password" required autoFocus/>
                        <button className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={(e) => {e.preventDefault();props.signUp({email,username,password});}}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )

}