/*
	Filename: 		AmplifyImage.js
	Description: 	A React functional component used to retrieve and display images from Amazon S3 buckets.
	Author: 		Ross Bishop
*/

import React, { useEffect, useState } from "react"

import "bootstrap/dist/css/bootstrap.css"

import { Storage } from "aws-amplify"

export default function AmplifyImage(props) {
	const [imageURL, setImageURL] = useState()

	// Asynchronous function to grab signed URL from Amplify API via key stored in GraphQL model
	const getImageURL = async () => {
		try {
			const signedURL = await Storage.get(props.imgKey, { level: "public" })
			setImageURL(signedURL)
		} catch (error) {
			console.log("Error getting image: " + error)
		}
	}

	// Grab image URL on component load
	useEffect(() => {
		getImageURL()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Once the image URL has loaded, display the image
	return <>{imageURL && <img className={props.style} src={imageURL} alt="Content" />}</>
}
