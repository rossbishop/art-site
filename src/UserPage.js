/*
	Filename: 		UserPage.js
	Description: 	A React page functional component used to display user profiles
	Author: 		Ross Bishop
*/

import React, { useState, useEffect } from "react"

import Header from "./Header"
import UserBanner from "./UserBanner"
import ProjectGrid from "./ProjectGrid"
import Footer from "./Footer"

import { API, Storage } from "aws-amplify"
import * as queries from "./graphql/queries"

function UserPage(props) {
	const [projectData, setProjectData] = useState(null)
	const [profileData, setProfileData] = useState(null)
	const [avatarURL, setAvatarURL] = useState()
	const [bannerURL, setBannerURL] = useState()
	const [noAvatar, setNoAvatar] = useState()
	const [noBanner, setNoBanner] = useState()

	// Get latest projects belonging to a user by GraphQL query via the Amplify API and store the data in state
	const getUserProjects = async () => {
		try {
			const owner = window.location.pathname.split("/")[2]
			const apiCall = await API.graphql({
				query: queries.projectsByUserByDate,
				variables: { owner: owner, limit: 20, sortDirection: "DESC" }
			})
			setProjectData(apiCall.data.projectsByUserByDate.items)
		} catch (error) {
			console.log("Error getting project: ", error)
		}
	}

	// Get profile data belonging to a user by GraphQL query via the Amplify API and store the data in state
	const getUserProfileData = async () => {
		try {
			const owner = window.location.pathname.split("/")[2]
			const apiCall = await API.graphql({ query: queries.publicUserProfileByUser, variables: { owner: owner } })
			setProfileData(apiCall.data.publicUserProfileByUser.items[0])
		} catch (error) {
			console.log("Error getting profile: ", error)
		}
	}

	// Get profile image URLs belonging to a user via the Amplify Storage API and store the data in state
	const getProfileImages = async () => {
		try {
			if (profileData !== null) {
				if (profileData.avatarImgFile != null) {
					const signedAvatarURL = await Storage.get(profileData.avatarImgFile.key, { level: "public" })
					setAvatarURL(signedAvatarURL)
				} else {
					setNoAvatar(true)
				}
				if (profileData.bannerImgFile != null) {
					const signedBannerURL = await Storage.get(profileData.bannerImgFile.key, { level: "public" })
					setBannerURL(signedBannerURL)
				} else {
					setNoBanner(true)
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	// Load user profile data and projects on page load
	useEffect(() => {
		getUserProjects()
		getUserProfileData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Once user profile data has loaded, get user profile images
	useEffect(() => {
		if (profileData !== undefined) {
			getProfileImages()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [profileData])

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{/* Once user profile data has loaded, display banner */}
			{profileData && (
				<UserBanner
					profileData={profileData}
					avatarURL={avatarURL}
					bannerURL={bannerURL}
					noBanner={noBanner}
					noAvatar={noAvatar}
				/>
			)}
			{/* Once user project data has loaded, display grid populated with user data */}
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

export default UserPage
