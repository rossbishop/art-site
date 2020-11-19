/*
	Filename: 		ProjectPage.js
	Description: 	A React page functional component used to display a user project, its revisions and comments
	Author: 		Ross Bishop
*/

import React, { useState, useEffect } from "react"

import Header from "./Header"
import ProjectModule from "./ProjectModule"
import Footer from "./Footer"

import { API } from "aws-amplify"
import * as queries from "./graphql/queries"

import { withRouter } from "react-router-dom"

function ProjectPage(props) {
	const [projectData, setProjectData] = useState(false)
	const [comment, setComment] = useState()

	// Get project specified in the URL by GraphQL query via the Amplify API and store the data in state
	const getProject = async () => {
		try {
			const uuid = await window.location.pathname.split("/")[2]
			const apiCall = await API.graphql({ query: queries.getProject, variables: { id: uuid } })
			setProjectData(apiCall.data.getProject)
		} catch (error) {
			console.log("Error getting project: ", error)
		}
	}

	// Get project on page data load
	useEffect(() => {
		getProject()
	}, [])

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{/* Once project data has loaded, display it in project module component */}
			{projectData && (
				<ProjectModule
					userDetails={props.userDetails}
					isLoggedIn={props.isLoggedIn}
					initialProjectDataState={projectData.revisions.items.length - 1}
					projectRevisionData={projectData.revisions.items}
					projectDetails={projectData}
					setComment={setComment}
					comment={comment}
					setLoading={props.setLoading}
					setDestinationPage={props.setDestinationPage}
				/>
			)}
			<Footer />
		</>
	)
}

export default withRouter(ProjectPage)
