/*
	Filename: 		Logout.js
	Description: 	A React functional component used to deauthenticate users 
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
// import LogoutStyles from "./css/logout.module.css"

export default function Logout(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 mb-2">
					{/* While deauthentication is in process, notify the user the logout is occurring */}
					{!props.getSuccess.isSuccess && (
						<div className="alert alert-secondary" role="alert">
							"Logging out..."
						</div>
					)}
					{/* Once the deauthentication process is successful, notify the user */}
					{props.getSuccess.isSuccess && (
						<div className="alert alert-success" role="alert">
							{props.getSuccess.message}
						</div>
					)}
					{/* If the deauthentication process is unsuccessful, notify the user */}
					{props.getError.isError && (
						<div className="alert alert-danger" role="alert">
							{props.getError.message}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
