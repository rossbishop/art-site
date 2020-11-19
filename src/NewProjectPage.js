/*
	Filename: 		NewProjectPage.js
	Description: 	A React page functional component used to create new user projects
	Author: 		Ross Bishop
*/

import React, { useState, useEffect } from "react"

import Header from "./Header"
import NewProject from "./NewProject"
import Footer from "./Footer"

import awsconfig from "./aws-exports"
import { API, Storage } from "aws-amplify"
import * as mutations from "./graphql/mutations"

import { v4 as uuidv4 } from "uuid"

import { Redirect } from "react-router-dom"

function NewProjectPage(props) {
	const [projectName, setProjectName] = useState("")
	const [projectDescription, setProjectDescription] = useState("")
	const [revisionName, setRevName] = useState("")
	const [revisionDescription, setRevDescription] = useState("")
	const [createdProject, setCreatedProject] = useState()
	const [projectSuccess, setProjectSuccess] = useState({ isSuccess: false, message: "" })
	const [projectError, setProjectError] = useState({ isError: false, message: "" })
	const [revisionImageKey, setRevisionImageKey] = useState()
	const [revisionImageURL, setRevisionImageURL] = useState()
	const [revisionFile, setRevisionFile] = useState()
	const [shouldRedirect, setRedirect] = useState(false)

	// Gets the newly uploaded project image from the S3 storage bucket via the Amplify Storage API and stores the URL in state so the image can be displayed
	const getNewProjectImage = async () => {
		try {
			const signedURL = await Storage.get(revisionImageKey, { level: "public" })
			setRevisionImageURL(signedURL)
		} catch (error) {
			console.log("Error getting project image: " + error)
		}
	}

	// Uploads new user image content to an Amazon S3 bucket via the Amplify Storage API
	// Then on success, provide a message to the user and store the uploaded image in state
	const uploadNewProjectImage = async inputFile => {
		const file = inputFile
		const imageuuid = uuidv4()
		try {
			let result = await Storage.put(`${imageuuid}.png`, file, {
				level: "public",
				contentType: "image/png",
				progressCallback(progress) {
					console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
				}
			})
			setRevisionImageKey(result.key)
		} catch (error) {
			console.log(error)
		}
	}

	// Creates a new user project in the form of a GraphQL model via the Amplify API
	// First checks that input data is valid
	// Then on success signal that the project revision should now be created
	const createNewProject = async () => {
		try {
			if (projectName === "") {
				throw new Error("Provide a valid project name")
			} else if (projectDescription === "") {
				throw new Error("Provide a project description")
			} else if (revisionName === "") {
				throw new Error("Provide a revision name")
			} else if (revisionDescription === "") {
				throw new Error("Provide a revision description")
			} else if (revisionImageURL === undefined) {
				throw new Error("Provide an initial revision image")
			} else {
				const projectData = {
					projectName: projectName,
					projectDescription: projectDescription,
					contentType: "project"
				}

				const projectCall = await API.graphql({ query: mutations.createProject, variables: { input: projectData } })
				setCreatedProject(projectCall)
			}
		} catch (error) {
			console.log("Error creating project: ", error)
			setProjectError({ isError: true, message: error })
		}
	}

	// Creates a new user project revision in the form of a GraphQL model via the Amplify API
	// Then on success, notify the user the project has been created and after 3 seconds redirect to the newly created project
	const createNewRevision = async () => {
		try {
			const revisionData = {
				projectID: createdProject.data.createProject.id,
				imgSrc: "https://i.imgur.com/BlbUQz7.jpg",
				name: revisionName,
				description: revisionDescription,
				contentType: "revision",
				imgFile: {
					bucket: awsconfig.aws_user_files_s3_bucket,
					key: revisionImageKey,
					region: awsconfig.aws_user_files_s3_bucket_region
				}
			}
			await API.graphql({ query: mutations.createRevision, variables: { input: revisionData } })
			setProjectSuccess({ isSuccess: true, message: "Success!" })
		} catch (error) {
			console.log("Error creating revision: ", error)
			setProjectError({ isError: true, message: error })
		} finally {
			setTimeout(() => {
				setRedirect(true)
			}, 3000)
		}
	}

	// Once project is created, start creating the initial revision
	// Once revision image has been uploaded, get the image URL so it can be displayed
	useEffect(() => {
		if (createdProject !== undefined) {
			createNewRevision()
		}

		if (revisionImageKey !== undefined) {
			getNewProjectImage()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [createdProject, revisionImageKey])

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{/* On initial page load, display project creation component */}
			{!shouldRedirect && (
				<NewProject
					projectName={projectName}
					projectDescription={projectDescription}
					revisionName={revisionName}
					revisionDescription={revisionDescription}
					projectSuccess={projectSuccess}
					projectError={projectError}
					setProjectName={setProjectName}
					setProjectDescription={setProjectDescription}
					setRevName={setRevName}
					setRevDescription={setRevDescription}
					createNewProject={createNewProject}
					uploadNewProjectImage={uploadNewProjectImage}
					revisionImageKey={revisionImageKey}
					revisionFile={revisionFile}
					setRevisionFile={setRevisionFile}
					revisionImageURL={revisionImageURL}
				/>
			)}
			{/* Once project is fully created, redirect to created project page */}
			{shouldRedirect && (
				<Redirect
					to={{
						pathname: `/project/${createdProject.data.createProject.id}`
					}}
				/>
			)}
			<Footer />
		</>
	)
}

export default NewProjectPage
