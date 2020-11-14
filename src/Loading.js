import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import LoadingStyles from "./css/loading.module.css"

import cx from "classnames"

export default function Loading(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="h3 mb-3 mt-4 font-weight-normal">Loading...</h1>
				</div>
			</div>
		</div>
	)
}
