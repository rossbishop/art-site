/*
	Filename: 		LoginPage.js
	Description: 	A React page functional component which acts as the site login page
	Author: 		Ross Bishop
*/

import React, { useState } from "react"

import Header from "./Header"
import Login from "./Login"
import Footer from "./Footer"

import { Auth } from "aws-amplify"

function LoginPage(props) {
	const [isError, setError] = useState({ isError: false, message: "" })
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [success, setSuccess] = useState({ isSuccess: false, message: "" })

	// When called, redirect to site index
	function getRedirectPage() {
		window.location.href = "/"
	}

	// Generates a new Cognito authentication session via the Amplify Auth API
	// On success, provide a message to the user and redirect to the index after 3 seconds
	const signIn = async props => {
		try {
			await Auth.signIn(username, password)
			setSuccess({ isSuccess: true, message: "You are now logged in. Redirecting to previous page..." })
			setTimeout(() => {
				getRedirectPage()
			}, 3000)
		} catch (error) {
			console.log("error signing in", error)
			console.log(error.message)
			setError({ isError: true, message: error.message })
		}
	}

	return (
		<>
			<Header
				userAttribs={props.userAttribs}
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			<Login
				setUsername={setUsername}
				setPassword={setPassword}
				setError={setError}
				getError={isError}
				signIn={signIn}
				getSuccess={success}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			<Footer />
		</>
	)
}

export default LoginPage
