import React, { useState, useEffect } from "react"

import Logout from "./Logout"
import { Header, Footer } from "./Imports.js"

import { Auth } from "aws-amplify"

function LogoutPage(props) {
	const [isError, setError] = useState({ isError: false, message: "" })
	const [success, setSuccess] = useState({ isSuccess: false, message: "" })

	function getRedirectPage() {
		window.location.href = "/"
	}

	const signOut = async props => {
		try {
			await Auth.signOut()
			setSuccess({ isSuccess: true, message: "You are now logged out. Redirecting to previous page..." })
			setTimeout(() => {
				getRedirectPage()
			}, 3000)
		} catch (error) {
			console.log("error signing out: ", error)
			setError({ isError: true, message: error.message })
		}
	}

	useEffect(() => {
		setTimeout(() => {
			signOut()
		}, 3000)
	})

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			<Logout setError={setError} getError={isError} getSuccess={success} signOut={signOut} />
			<Footer />
		</>
	)
}

export default LogoutPage
