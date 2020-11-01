import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import LoginStyles from './css/login.module.css'
import cx from 'classnames'
import {Link} from './Imports'
import {Redirect} from"react-router-dom";

export default function Login(props) {

    const username=props.getUsername
    const password=props.getPassword
    const getError=props.getError

    const [redirectRegister, setRedirectRegister] = useState(false)

    return (
        <>
        {redirectRegister && (
            <Redirect to="/loading" /> 
        )}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className={LoginStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Login</h1>
                        {props.getSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">{props.getSuccess.message}</div>
                        )
                        }
                        {props.getError.isError && (
                            <div className="alert alert-danger" role="alert">{props.getError.message}</div>)
                        }
                        <label htmlFor="inputUsername" className="sr-only">Enter username</label>
                        <input type="username" id="inputUsername" className={cx(LoginStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" onChange={event => props.setUsername(event.target.value)} required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(LoginStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" onChange={event => props.setPassword(event.target.value)} required autoFocus/>
                        <button className={cx(LoginStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={(e) => {e.preventDefault();props.signIn({username,password});}}>Login</button>
                        <button className={cx(LoginStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={(e) => {e.preventDefault();props.setDestinationPage('/register');props.setLoading(true);setRedirectRegister(true);}}>Register</button>
                    </form>
                    <div className={cx(LoginStyles.forgotPassword, "mt-2", "mb-3")}><Link to="/loading" onClick={event => {props.setLoading(true);props.setDestinationPage('/forgot')}}>Forgot Password</Link></div>
                </div>
            </div>
        </div>
        </>
    )
}
