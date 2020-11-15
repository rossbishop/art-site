import React, { useEffect, useState } from "react"

import NewRevision from "./NewRevision"
import { Header, Footer } from "./Imports.js"

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

	function getRedirectPage() {
		window.location.href = `/project/${projectID}`
	}

	const getNewRevisionImage = async () => {
		try {
			const signedURL = await Storage.get(revisionImageKey, { level: "public" })
			setRevisionImageURL(signedURL)
		} catch (error) {
			console.log("Error getting project image: " + error)
		}
	}

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

	useEffect(() => {
		setProjectID(window.location.pathname.split("/")[2])
	}, [])

	useEffect(() => {
		if (revisionImageKey !== undefined) {
			getNewRevisionImage()
		}
	}, [revisionImageKey])

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
