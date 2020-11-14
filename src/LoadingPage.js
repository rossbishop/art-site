import React from "react"

import Loading from "./Loading"
import { Header, Footer } from "./Imports.js"

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
