/*
	Filename: 		Forgot.js
	Description: 	A React functional component used for requesting a reset of user passwords
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import ForgotStyles from "./css/forgot.module.css"

import cx from "classnames"

export default function Forgot(props) {
	const username = props.getUsername

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form className={ForgotStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Forgot Password</h1>
						{/* If an error occurred, tell the user */}
						{props.getError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.getError.message}
							</div>
						)}
						{/* If an operation was successful, tell the user */}
						{props.getSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								{props.getSuccess.message}
							</div>
						)}
						<label htmlFor="inputUsername" className="sr-only">
							Enter username
						</label>
						<input
							type="username"
							id="inputUsername"
							className={cx(ForgotStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Username"
							// As user types in username, update state in parent component
							onChange={event => props.setUsername(event.target.value)}
							required
							autoFocus
						/>
						<button
							className={cx(ForgotStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-2")}
							type="submit"
							// When user clicks this button, submit their password reset request
							onClick={e => {
								e.preventDefault()
								props.forgotPassword(username)
							}}
						>
							Reset Password
						</button>
						<button
							className={cx(ForgotStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-2")}
							type="submit"
							// When user clicks this button, send a new confirmation code to their email address
							onClick={e => {
								e.preventDefault()
								props.resendConfirmation(username)
							}}
						>
							Resend Verification Code
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
