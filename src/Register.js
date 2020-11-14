import React, { useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css"
import RegisterStyles from "./css/register.module.css"

import cx from "classnames"

export default function Register(props) {
	const username = props.getUsername
	const email = props.getEmail
	const password = props.getPassword
	const passwordConfirm = props.getPasswordConfirm

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
		for (var i = 0; i < 31; i++) {
			var option = document.createElement("option")
			var optVal = i + 1
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
						{props.getError.isError && props.errorType == "aws" && (
							<div className="alert alert-danger" role="alert">
								{props.getError.message.log}
							</div>
						)}
						{props.getError.isError && props.errorType == "local" && (
							<div className="alert alert-danger" role="alert">
								{props.getError.message}
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
							onChange={event => props.setUsername(event.target.value)}
							required
							autoFocus
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Enter password
						</label>
						<p>Enter Birthdate:</p>
						{/* <input type="birthdate" id="inputBirthdate" className={cx(RegisterStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Birthdate (mm/dd/yyyy)" onChange={event => props.setBirthdate(event.target.value)} required autoFocus/>
                        <label htmlFor="inputBirthdate" className="sr-only">Enter birthdate</label> */}
						<select
							className={RegisterStyles.dateDropdown}
							id="month"
							onChange={event => props.setBirthMonth(event.target.value)}
						></select>
						<select
							className={RegisterStyles.dateDropdown}
							id="day"
							onChange={event => props.setBirthDay(event.target.value)}
						></select>
						<input
							type="birthyear"
							id="year"
							placeholder="Enter Year"
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
							onChange={event => props.setPasswordConfirm(event.target.value)}
							required
							autoFocus
						/>
						<button
							className={cx(RegisterStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							type="submit"
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
