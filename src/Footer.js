import React from "react"

import { Link } from "react-router-dom"

export default function Footer() {
	const date = new Date()
	return (
		<>
			<footer className="container mt-5">
				<p
					className="float-right"
					onClick={() => {
						window.scrollTo(0, 0)
					}}
				>
					Back to top
				</p>
				<p>&copy; Ross Bishop {date.getFullYear()}</p>
			</footer>
		</>
	)
}
