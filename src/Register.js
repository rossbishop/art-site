/*
	Filename: 		Register.js
	Description: 	A React functional component used to register new user accounts
	Author: 		Ross Bishop
*/

import React, { useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css"
import RegisterStyles from "./css/register.module.css"

import cx from "classnames"

export default function Register(props) {
	const username = props.getUsername
	const email = props.getEmail
	const password = props.getPassword
	const passwordConfirm = props.getPasswordConfirm

	// Generate and populate day and month dropdowns for entering user birthdates at page load
	useEffect(() => {
		var month = document.getElementById("month")
		var monthValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		for (var i = 0; i < monthValues.length; i++) {
			var option = document.createElement("option")
			var optVal = i + 1
			option.value = String(String(optVal).padStart(2, "0"))
			option.text = monthValues[i]
			month.appendChild(option)
		}
		var day = document.getElementById("day")
		for (i = 0; i < 31; i++) {
			option = document.createElement("option")
			optVal = i + 1
			option.value = String(String(optVal).padStart(2, "0"))
			option.text = i + 1
			day.appendChild(option)
		}
	}, [])

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form className={RegisterStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Register</h1>
						{/* If AWS flags an error, present it to the user */}
						{props.getError.isError && props.errorType === "aws" && (
							<div className="alert alert-danger" role="alert">
								{props.getError.message.log}
							</div>
						)}
						{/* If there is a local verification error, present it to the user */}
						{props.getError.isError && props.errorType === "local" && (
							<div className="alert alert-danger" role="alert">
								{props.getError.message.toString()}
							</div>
						)}
						<label htmlFor="inputEmail" className="sr-only">
							Enter email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className={cx(RegisterStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Email Address"
							// As user types in email, update state in parent component
							onChange={event => props.setEmail(event.target.value)}
							required
							autoFocus
						/>
						<label htmlFor="inputUsername" className="sr-only">
							Enter new username
						</label>
						<input
							type="username"
							id="inputUsername"
							className={cx(RegisterStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Username"
							// As user types in username, update state in parent component
							onChange={event => props.setUsername(event.target.value)}
							required
							autoFocus
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Enter password
						</label>
						<p>Enter Birthdate:</p>
						<select
							className={RegisterStyles.dateDropdown}
							id="month"
							// As user selects birth month, update state in parent component
							onChange={event => props.setBirthMonth(event.target.value)}
						></select>
						<select
							className={RegisterStyles.dateDropdown}
							id="day"
							// As user selects birth day, update state in parent component
							onChange={event => props.setBirthDay(event.target.value)}
						></select>
						<input
							type="birthyear"
							id="year"
							placeholder="Enter Year"
							// As user selects birth year, update state in parent component
							onChange={event => {
								var birthYear = event.target.value
								props.setBirthYear(String(birthYear).padStart(4, "0"))
							}}
						></input>
						<input
							type="password"
							id="inputPassword"
							className={cx(RegisterStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Password"
							// As user types in password, update state in parent component
							onChange={event => props.setPassword(event.target.value)}
							required
							autoFocus
						/>
						<label htmlFor="inputPasswordConfirm" className="sr-only">
							Enter password
						</label>
						<input
							type="password"
							id="inputPasswordConfirm"
							className={cx(RegisterStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Confirm Password"
							// As user types in password confirmation, update state in parent component
							onChange={event => props.setPasswordConfirm(event.target.value)}
							required
							autoFocus
						/>
						<button
							className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							type="submit"
							// When user clicks the register button, initiate the creation of a new Cognito user account via the Amplify Auth API
							onClick={e => {
								e.preventDefault()
								props.signUp({ email, username, password, passwordConfirm })
							}}
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
