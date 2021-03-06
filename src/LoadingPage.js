/*
	Filename: 		LoadingPage.js
	Description: 	A React page functional component which acts as the site loading page
	Author: 		Ross Bishop
*/

import React from "react"

import Header from "./Header"
import Loading from "./Loading"
import Footer from "./Footer"

function LoadingPage(props) {
	return (
		<>
			<Header userAttribs={props.userAttribs} userDetails={props.userDetails} isLoggedIn={props.isLoggedIn} />
			<Loading />
			<Footer />
		</>
	)
}

export default LoadingPage
