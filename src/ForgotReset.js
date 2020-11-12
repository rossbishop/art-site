import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import ForgotStyles from './css/forgot.module.css'

import cx from 'classnames'

import { Redirect } from 'react-router-dom'

export default function ForgotReset(props) {

    const code=props.getConfirmationCode
    const username=props.getUsername
    const new_password=props.getPassword
    const success=props.getSuccess.message
    const error=props.getError.message
    const isResetComplete=props.isResetComplete

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className={ForgotStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Reset Password</h1>
                        {props.getSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">{success}</div>
                        )
                        }
                        {props.getError.isError && (
                            <div className="alert alert-danger" role="alert">{error}</div> 
                        )
                        }
                        <label htmlFor="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(ForgotStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" required autoFocus/>
                        <label htmlFor="inputPasswordConfirm" className="sr-only">Confirm password</label>
                        <input type="password" id="inputPasswordConfirm" className={cx(ForgotStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirm Password" onChange={event => props.setPassword(event.target.value)} required autoFocus/>
                        <label htmlFor="inputConfirmationCode" className="sr-only">Enter confirmation code</label>
                        <input type="confirmation" id="inputConfirmationCode" className={cx(ForgotStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Confirmation Code" onChange={event => props.setConfirmationCode(event.target.value)} required autoFocus/>        
                        <button className={cx(ForgotStyles.btnLogin, (props.getSuccess.isSuccess ? "disabled" : ""),"btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={(e) => {e.preventDefault();props.forgotPasswordSubmit({username,code,new_password});}}>Reset Password</button>
                        {isResetComplete &&
                            <Redirect to="/login" /> 
                        }
                    </form>
                </div>
            </div>
        </div>
    )

}
