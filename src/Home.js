/*
	Filename: 		Home.js
	Description: 	A React page functional component which acts as the site landing page
	Author: 		Ross Bishop
*/

import React, { useState, useEffect } from "react"

import Header from "./Header"
import ProjectGrid from "./ProjectGrid"
import Footer from "./Footer"

import { API } from "aws-amplify"
import * as queries from "./graphql/queries"

function Home(props) {
	const [projectData, setProjectData] = useState(null)

	// Gets projects uploaded by all users and stores in state
	const getUserProjects = async () => {
		try {
			const apiCall = await API.graphql({ query: queries.listProjects, variables: { limit: 10 } })
			setProjectData(apiCall.data.listProjects.items)
		} catch (error) {
			console.log("Error getting list of projects: ", error)
		}
	}

	// Gets user projects on page load
	useEffect(() => {
		getUserProjects()
	}, [])

	return (
		<>
			<Header
				userDetails={props.userDetails}
				userAttribs={props.userAttribs}
				isLoggedIn={props.isLoggedIn}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			<div className="container">
				<div className="row">
					<div className="col-12 mt-4 mb-0">
						<h2>Latest User Projects</h2>
					</div>
				</div>
			</div>
			{/* When project data loads, display the projects in a grid */}
			{projectData && (
				<ProjectGrid
					projectData={projectData}
					setLoading={props.setLoading}
					setDestinationPage={props.setDestinationPage}
				/>
			)}
			<Footer />
		</>
	)
}

export default Home
