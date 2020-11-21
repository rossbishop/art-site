/*
	Filename: 		RegisterPage.js
	Description: 	A React page functional component used to sign up new users
	Author: 		Ross Bishop
*/

import React, { useState } from "react"

import Header from "./Header"
import Register from "./Register"
import RegisterConfirm from "./RegisterConfirm"
import Footer from "./Footer"

import { Auth } from "aws-amplify"

function RegisterPage(props) {
	const [isError, setError] = useState({ isError: false, message: "" })
	const [errorType, setErrorType] = useState()
	const [isUserCreated, setUserCreated] = useState(false)
	const [isUserConfirmed, setUserConfirmed] = useState(false)
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [passwordConfirm, setPasswordConfirm] = useState()
	const [confirmationCode, setConfirmationCode] = useState()
	const [birthdate, setBirthdate] = useState()
	const [birthDay, setBirthDay] = useState("01")
	const [birthMonth, setBirthMonth] = useState("01")
	const [birthYear, setBirthYear] = useState()

	// Creates a new Cognito user via the Amplify Auth API
	// Check for valid user details on the front end
	// Then on success, signal that the user has been created
	const signUp = async props => {
		const { username, password, email } = props
		try {
			let passwordNumberRegEx = new RegExp("[0-9]")
			let passwordLetterRegEx = new RegExp("[a-z]")
			let birthdate = birthMonth + "/" + birthDay + "/" + birthYear
			//setBirthdate(birthMonth + "/" + birthDay + "/" + birthYear)
			setErrorType("local")
			if ((email === undefined) | (email === "") | !isValidEmail(email)) {
				throw new Error("You must provide a valid email address")
			}
			if (username === undefined || username.length < 3) {
				throw new Error("Username must be at 3 three characters")
			} else if (birthDay === undefined || isNaN(birthDay) || birthDay > 31 || birthDay < 1) {
				throw new Error("Valid day of birth must be specified")
			} else if (birthMonth === undefined || isNaN(birthMonth) || birthMonth > 12 || birthMonth < 1) {
				throw new Error("Valid month of birth must be specified")
			} else if (
				birthYear === undefined ||
				isNaN(birthYear) ||
				birthYear < 1900 ||
				getAge(birthYear, birthMonth, birthDay) < 18
			) {
				throw new Error("You must be at least 18 to sign up to this site")
			} else if ((password || passwordConfirm) === undefined || (password || passwordConfirm) === "") {
				throw new Error("Password must not be empty")
			} else if (password !== passwordConfirm) {
				throw new Error("Passwords must match!")
			} else if (password.length < 8) {
				throw new Error("Password must be at least 8 characters")
			} else if (!(password.match(passwordNumberRegEx) && password.match(passwordLetterRegEx))) {
				throw new Error("Password must contain lowercase characters and numbers")
			} else {
				setErrorType("aws")
				console.log("BIRTHDATE: " + birthdate)
				await Auth.signUp({
					username,
					password,
					attributes: {
						email,
						birthdate,
						preferred_username: username
					}
				})
				setUserCreated(true)
			}
		} catch (error) {
			console.log("Error: ", error)
			setError({ isError: true, message: error })
		}
	}

	// Confirms a new Cognito user via the Amplify Auth API
	// Then on success, signal that the user has been confirmed
	const confirmSignUp = async props => {
		const { username, confirmationCode } = props
		try {
			await Auth.confirmSignUp(username, confirmationCode)
			setUserConfirmed(true)
		} catch (error) {
			console.log("error confirming sign up: ", error)
			setError({ isError: true, message: error })
		}
	}

	// Takes date in the form of birth year, birth month and birth date#
	// Returns the age of that date
	function getAge(date) {
		var now = new Date()
		var birthDate = new Date(date)
		var currentAge = now.getFullYear() - birthDate.getFullYear()
		var currentMonth = now.getMonth() - birthDate.getMonth()
		if (currentMonth < 0 || (currentMonth === 0 && now.getDate() < birthDate.getDate())) {
			currentAge--
		}
		return currentAge
	}

	// Use(d to use) regex to verify whether or not email address is valid
	// Returns true if valid, else false
	function isValidEmail(email) {
		var emailname = email.split("@")[0]
		var emaildomain = email.split("@")[1]
		var atcheck = email.split("@")[2]
		var emailtld = email.split(".")[1]

		if (emailname === undefined) {
			return false
		} else if (atcheck !== undefined) {
			return false
		} else if (emaildomain === undefined) {
			return false
		} else if (emailtld === undefined) {
			return false
		} else {
			return true
		}

		//const re = /^((^<>()\[\]\\.,;:\s@"]+(\.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		//return re.test(String(email).toLowerCase())
	}

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{/* If user isn't yet created, display registration form */}
			{!isUserCreated && (
				<Register
					setUsername={setUsername}
					setEmail={setEmail}
					setPassword={setPassword}
					setPasswordConfirm={setPasswordConfirm}
					setBirthdate={setBirthdate}
					getUsername={username}
					getEmail={email}
					getPassword={password}
					getPasswordConfirm={passwordConfirm}
					getError={isError}
					getBirthdate={birthdate}
					signUp={signUp}
					errorType={errorType}
					setBirthDay={setBirthDay}
					setBirthMonth={setBirthMonth}
					setBirthYear={setBirthYear}
				/>
			)}
			{/* If user is created, display confirmation form */}
			{isUserCreated && (
				<RegisterConfirm
					confirmSignUp={confirmSignUp}
					getConfirmationCode={confirmationCode}
					getUsername={username}
					setConfirmationCode={setConfirmationCode}
					getUserConfirmed={isUserConfirmed}
				/>
			)}
			<Footer />
		</>
	)
}

export default RegisterPage
