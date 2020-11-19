/*
	Filename: 		RegisterConfirm.js
	Description: 	A React functional component used to confirm new user accounts
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import RegisterStyles from "./css/register.module.css"

import cx from "classnames"

export default function RegisterUser(props) {
	const confirmationCode = props.getConfirmationCode
	const username = props.getUsername

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form className={RegisterStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Confirm Account</h1>
						{/* Once user account is confirmed, notify user they can now login */}
						{props.getUserConfirmed && (
							<div className="alert alert-success" role="alert">
								Your account is now confirmed. You may now login.
							</div>
						)}
						{/* If there is an error during user account confirmation, notify user */}
						{props.getError && (
							<div className="alert alert-danger" role="alert">
								{props.getErrorMessage}
							</div>
						)}
						<label htmlFor="inputConfirmationCode" className="sr-only">
							Enter confirmation code
						</label>
						<input
							type="confirmation"
							id="inputConfirmationCode"
							className={cx(RegisterStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Confirmation Code"
							// As user types in confirmation code, update state in parent component
							onChange={event => props.setConfirmationCode(event.target.value)}
							required
							autoFocus
						/>
						<button
							className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							type="submit"
							// When user clicks the confirm account button, initiate the confirmation of the given Cognito user account via the Amplify Auth API
							onClick={e => {
								e.preventDefault()
								props.confirmSignUp({ username, confirmationCode })
							}}
						>
							Confirm Account
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
