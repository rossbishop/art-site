/*
	Filename: 		NewRevisionPage.js
	Description: 	A React page functional component used to create new user revisions
	Author: 		Ross Bishop
*/

import React, { useEffect, useState } from "react"

import Header from "./Header"
import NewRevision from "./NewRevision"
import Footer from "./Footer"

import { API, Storage } from "aws-amplify"
import * as mutations from "./graphql/mutations"
import awsconfig from "./aws-exports"

import { v4 as uuidv4 } from "uuid"

function NewRevisionPage(props) {
	const [revisionName, setRevisionName] = useState("")
	const [revisionDescription, setRevisionDescription] = useState("")
	const [projectID, setProjectID] = useState()
	const [revisionSuccess, setRevisionSuccess] = useState({ isSuccess: false, message: "" })
	const [revisionError, setRevisionError] = useState({ isError: false, message: "" })
	const [revisionImageKey, setRevisionImageKey] = useState()
	const [revisionImageURL, setRevisionImageURL] = useState()
	const [revisionFile, setRevisionFile] = useState()

	// When called, redirect to new project id
	function getRedirectPage() {
		window.location.href = `/project/${projectID}`
	}

	// Gets the newly uploaded revision image from the S3 storage bucket via the Amplify Storage API and stores the URL in state so the image can be displayed
	const getNewRevisionImage = async () => {
		try {
			const signedURL = await Storage.get(revisionImageKey, { level: "public" })
			setRevisionImageURL(signedURL)
		} catch (error) {
			console.log("Error getting project image: " + error)
		}
	}

	// Uploads new user image content to an Amazon S3 bucket via the Amplify Storage API
	// Then on success, provide a message to the user and store the uploaded image in state
	const uploadNewRevisionImage = async inputFile => {
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

	// Get project ID from the URL, as we were linked to it from the project page
	useEffect(() => {
		setProjectID(window.location.pathname.split("/")[2])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Once revision image has been uploaded, get the image URL so it can be displayed
	useEffect(() => {
		if (revisionImageKey !== undefined) {
			getNewRevisionImage()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [revisionImageKey])

	// Creates a new user project revision in the form of a GraphQL model via the Amplify API
	// Then on success, notify the user the revision has been created and after 3 seconds redirect to the newly updated project
	const createNewRevision = async () => {
		try {
			if (revisionName === "") {
				throw new Error("Provide a revision name")
			} else if (revisionDescription === "") {
				throw new Error("Provide a revision description")
			} else if (revisionImageURL === undefined) {
				throw new Error("Provide a revision image")
			} else {
				const revisionData = {
					projectID: projectID,
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
				setRevisionSuccess({ isSuccess: true, message: "Success!" })
				setTimeout(() => {
					getRedirectPage()
				}, 3000)
			}
		} catch (error) {
			console.log("Error creating revision: ", error)
			setRevisionError({ isError: true, message: error })
		}
	}

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{/* Once project ID has been grabbed from URL, display revision creation component */}
			{projectID && (
				<NewRevision
					createNewRevision={createNewRevision}
					setRevisionName={setRevisionName}
					setRevisionDescription={setRevisionDescription}
					revisionName={revisionName}
					revisionDescription={revisionDescription}
					revisionSuccess={revisionSuccess}
					revisionError={revisionError}
					uploadNewRevisionImage={uploadNewRevisionImage}
					revisionImageKey={revisionImageKey}
					setRevisionFile={setRevisionFile}
					revisionImageURL={revisionImageURL}
					revisionFile={revisionFile}
				/>
			)}
			<Footer />
		</>
	)
}

export default NewRevisionPage
