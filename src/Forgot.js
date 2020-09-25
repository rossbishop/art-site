import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import ForgotStyles from './css/forgot.module.css'
import cx from 'classnames'
import {Link} from './Imports'

export default function Forgot(props) {

    const username=props.getUsername

    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <form className={ForgotStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Forgot Password</h1>
                        {props.getError.isError && (
                            <div className="alert alert-danger" role="alert">{props.getError.message}</div>)
                        }
                        {props.getSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">{props.getSuccess.message}</div>)
                        }
                        <label for="inputUsername" className="sr-only">Enter username</label>
                        <input type="username" id="inputUsername" className={cx(ForgotStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" onChange={event => props.setUsername(event.target.value)} required autofocus/>
                        <button className={cx(ForgotStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-2")} type="submit" onClick={(e) => {e.preventDefault();props.forgotPassword(username);}}>Reset Password</button>
                        <button className={cx(ForgotStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-2")} type="submit" onClick={(e) => {e.preventDefault();props.resendConfirmation(username);}}>Resend Verification Code</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
