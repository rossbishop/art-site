/*
	Filename: 		Footer.js
	Description: 	A React functional component used on every page as a footnote.
	Author: 		Ross Bishop
*/

import React from "react"

export default function Footer() {
	const date = new Date()
	return (
		<>
			<footer className="container mt-5">
				<p
					className="float-right"
					// When "Back to top" is clicked, scroll browser window to the top
					onClick={() => {
						window.scrollTo(0, 0)
					}}
				>
					Back to top
				</p>
				{/* Get current date so copyright notice stays up to date */}
				<p>&copy; Ross Bishop {date.getFullYear()}</p>
			</footer>
		</>
	)
}
