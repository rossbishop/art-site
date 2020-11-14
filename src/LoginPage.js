import React, { useState } from "react"

import { Header, Footer } from "./Imports.js"

import Login from "./Login"

import { Auth } from "aws-amplify"

function LoginPage(props) {
	const [isError, setError] = useState({ isError: false, message: "" })
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [success, setSuccess] = useState({ isSuccess: false, message: "" })

	function getRedirectPage() {
		window.location.href = "/"
	}

	const signIn = async props => {
		await Auth.signIn(username, password)
			.then(response => {
				setSuccess({ isSuccess: true, message: "You are now logged in. Redirecting to previous page..." })
				setTimeout(() => {
					getRedirectPage()
				}, 3000)
			})
			.catch(error => {
				console.log("error signing in", error)
				console.log(error.message)
				setError({ isError: true, message: error.message })
			})
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
