/*
	Filename: 		Login.js
	Description: 	A React functional component used to authenticate users 
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import LoginStyles from "./css/login.module.css"

import cx from "classnames"

import { Link } from "react-router-dom"

export default function Login(props) {
	const username = props.getUsername
	const password = props.getPassword

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form className={LoginStyles.formProfileUpdate}>
							<h1 className="h3 mb-3 mt-4 font-weight-normal">Login</h1>
							{/* If the user authenticates successfully, notify them */}
							{props.getSuccess.isSuccess && (
								<div className="alert alert-success" role="alert">
									{props.getSuccess.message}
								</div>
							)}
							{/* If there is an error authenticating the user, notify them */}
							{props.getError.isError && (
								<div className="alert alert-danger" role="alert">
									{props.getError.message}
								</div>
							)}
							<label htmlFor="inputUsername" className="sr-only">
								Enter username
							</label>
							<input
								type="username"
								id="inputUsername"
								className={cx(LoginStyles.formControl, "mb-3", "py-2", "pl-0")}
								placeholder="Enter Username"
								// As user types in username, update state in parent component
								onChange={event => props.setUsername(event.target.value)}
								data-cy="inputUsername"
								required
								autoFocus
							/>
							<label htmlFor="inputPassword" className="sr-only">
								Enter password
							</label>
							<input
								type="password"
								id="inputPassword"
								className={cx(LoginStyles.formControl, "mb-3", "py-2", "pl-0")}
								placeholder="Enter Password"
								// As user types in password, update state in parent component
								onChange={event => props.setPassword(event.target.value)}
								data-cy="inputPassword"
								required
								autoFocus
							/>
							<button
								className={cx(LoginStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
								type="submit"
								data-cy="submit"
								// When the user clicks the login button, begin authentication process
								onClick={e => {
									e.preventDefault()
									props.signIn({ username, password })
								}}
							>
								Login
							</button>
							<Link
								to="/loading"
								// When the user clicks the register button, link them to the register page
								onClick={event => {
									props.setLoading(true)
									props.setDestinationPage("/register")
								}}
							>
								<button
									className={cx(LoginStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
									type="submit"
								>
									Register
								</button>
							</Link>
						</form>
						<div className={cx(LoginStyles.forgotPassword, "mt-2", "mb-3")}>
							<Link
								to="/loading"
								// When the user clicks the forgot password button, link them to the forgot password page
								onClick={event => {
									props.setLoading(true)
									props.setDestinationPage("/forgot")
								}}
							>
								Forgot Password
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
