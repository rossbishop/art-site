import React from "react"

import "bootstrap/dist/css/bootstrap.css"
// import LogoutStyles from "./css/logout.module.css"

export default function Logout(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 mb-2">
					{!props.getSuccess.isSuccess && (
						<div className="alert alert-secondary" role="alert">
							"Logging out..."
						</div>
					)}
					{props.getSuccess.isSuccess && (
						<div className="alert alert-success" role="alert">
							{props.getSuccess.message}
						</div>
					)}
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
