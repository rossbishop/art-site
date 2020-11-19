/*
	Filename: 		index.js
	Description: 	A React root component which acts as the site index
	Author: 		Ross Bishop
*/

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById("root")
)
