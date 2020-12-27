/*
	Filename: 		LogoutPage.js
	Description: 	A React page functional component which acts as the site logout page
	Author: 		Ross Bishop
*/

import React, { useState, useEffect } from "react"

import Header from "./Header"
import Logout from "./Logout"
import Footer from "./Footer"

import { Auth } from "aws-amplify"

function LogoutPage(props) {
	const [isError, setError] = useState({ isError: false, message: "" })
	const [success, setSuccess] = useState({ isSuccess: false, message: "" })

	// When called, redirect to site index
	function getRedirectPage() {
		window.location.href = "/"
	}

	// Ends an existing cognito authentication session via the Amplify API
	// On success, provide a message to the user and redirect to the index after 3 seconds
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

	// Automatically sign out 3 seconds after loading this page
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
