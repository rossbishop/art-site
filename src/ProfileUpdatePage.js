import { Header, Footer } from "./Imports.js"
import React, { useState, useEffect } from "react"
import ProfileUpdate from "./ProfileUpdate"

import { Auth } from "aws-amplify"
import { API, Storage } from "aws-amplify"
import { v4 as uuidv4 } from "uuid"
import * as mutations from "./graphql/mutations"
import * as queries from "./graphql/queries"
import awsconfig from "./aws-exports"

function ProfileUpdatePage(props) {
	const [username, setUsername] = useState(props.userAttribs["preferred_username"])
	const [job, setJob] = useState(props.userAttribs["custom:job"])
	const [location, setLocation] = useState(props.userAttribs["custom:location"])
	const [bio, setBio] = useState(props.userAttribs["custom:bio"])

	const [instagram, setInstagram] = useState(props.userAttribs["custom:instagram"])
	const [facebook, setFacebook] = useState(props.userAttribs["custom:facebook"])
	const [twitter, setTwitter] = useState(props.userAttribs["custom:twitter"])

	const [currPassword, setCurrPassword] = useState()
	const [newPassword, setNewPassword] = useState()
	const [newPasswordConfirm, setNewPasswordConfirm] = useState()

	const [loadProfileData, setLoadProfileData] = useState()

	const [socialSuccess, setSocialSuccess] = useState({ isSuccess: false, message: "" })
	const [socialError, setSocialError] = useState({ isError: false, message: "" })

	const [profileSuccess, setProfileSuccess] = useState({ isSuccess: false, message: "" })
	const [profileError, setProfileError] = useState({ isError: false, message: "" })

	const [passwordSuccess, setPasswordSuccess] = useState({ isSuccess: false, message: "" })
	const [passwordError, setPasswordError] = useState({ isError: false, message: "" })

	const [avatarImageKey, setAvatarImageKey] = useState()
	const [avatarImageURL, setAvatarImageURL] = useState()
	const [avatarFile, setAvatarFile] = useState()

	const [bannerImageKey, setBannerImageKey] = useState()
	const [bannerImageURL, setBannerImageURL] = useState()
	const [bannerFile, setBannerFile] = useState()

	const getUserProfileData = async () => {
		try {
			await Auth.currentAuthenticatedUser()
			const apiCall = await API.graphql({
				query: queries.publicUserProfileByUser,
				variables: { owner: props.userDetails.username }
			})
			setLoadProfileData(apiCall.data.publicUserProfileByUser.items[0])
		} catch (error) {
			console.log("Error getting profile: ", error)
		}
	}

	const updateSocial = async () => {
		try {
			let user = await Auth.currentAuthenticatedUser()
			const publicDetails = { id: user.attributes.sub, facebook: facebook, instagram: instagram, twitter: twitter }
			await API.graphql({
				query: mutations.updatePublicUserProfile,
				variables: { input: publicDetails }
			})
			setSocialSuccess({ isSuccess: true, message: "Social details updated successfully" })
		} catch (err) {
			console.log(err)
			setSocialError(err)
		}
	}

	const updateProfile = async () => {
		try {
			if (username === undefined || username === "") {
				throw new Error("You must enter a username")
			} else if (avatarImageURL === undefined || avatarImageURL === "") {
				throw new Error("You must provide an avatar image")
			} else if (bannerImageURL === undefined || bannerImageURL === "") {
				throw new Error("You must provide a banner image")
			} else {
				let user = await Auth.currentAuthenticatedUser()
				await Auth.updateUserAttributes(user, {
					preferred_username: username
				})

				let avatarImgJson = ""
				let bannerImgJson = ""

				if (avatarImageKey !== undefined) {
					avatarImgJson = {
						bucket: awsconfig.aws_user_files_s3_bucket,
						key: avatarImageKey,
						region: awsconfig.aws_user_files_s3_bucket_region
					}
				}

				if (bannerImageKey !== undefined) {
					bannerImgJson = {
						bucket: awsconfig.aws_user_files_s3_bucket,
						key: bannerImageKey,
						region: awsconfig.aws_user_files_s3_bucket_region
					}
				}

				const publicDetails = {
					id: user.attributes.sub,
					username: username,
					position: job,
					location: location,
					bio: bio,
					avatarImgFile: avatarImgJson !== "" ? avatarImgJson : loadProfileData.avatarImgFile,
					bannerImgFile: bannerImgJson !== "" ? bannerImgJson : loadProfileData.bannerImgFile
				}

				await API.graphql({
					query: mutations.updatePublicUserProfile,
					variables: { input: publicDetails }
				})
				setProfileSuccess({ isSuccess: true, message: "Profile details updated successfully" })
			}
		} catch (err) {
			console.log(err)
			setProfileError({ isError: true, message: err })
		}
	}

	const updatePassword = async () => {
		let passwordNumberRegEx = new RegExp("[0-9]")
		let passwordLetterRegEx = new RegExp("[a-z]")
		try {
			if (currPassword === undefined || currPassword === "") {
				throw new Error("Enter current password")
			}
			if ((newPassword || newPasswordConfirm) === undefined || (newPassword || newPasswordConfirm) === "") {
				throw new Error("New password must not be empty")
			} else if (newPassword !== newPasswordConfirm) {
				throw new Error("New passwords must match!")
			} else if (newPassword.length < 8) {
				throw new Error("New password must be at least 8 characters")
			} else if (!(newPassword.match(passwordNumberRegEx) && newPassword.match(passwordLetterRegEx))) {
				throw new Error("New password must contain lowercase characters and numbers")
			} else {
				const user = await Auth.currentAuthenticatedUser()
				const passwordChange = await Auth.changePassword(user, currPassword, newPassword)
				console.log(passwordChange)
				setPasswordSuccess({ isSuccess: true, message: passwordChange })
			}
		} catch (error) {
			console.log(error)
			if (typeof error == "object") {
				setPasswordError({ isError: true, message: error.message })
			} else {
				setPasswordError({ isError: true, message: error })
			}
		}
	}

	const uploadNewAvatarImage = async inputFile => {
		console.log("Start Image Upload")
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
			console.log(result)
			setAvatarImageKey(result.key)
		} catch (error) {
			console.log(error)
		}
	}

	const uploadNewBannerImage = async inputFile => {
		console.log("Start Image Upload")
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
			console.log(result)
			setBannerImageKey(result.key)
		} catch (error) {
			console.log(error)
		}
	}

	const getNewAvatarImage = async () => {
		try {
			const signedURL = await Storage.get(avatarImageKey, { level: "public" })
			setAvatarImageURL(signedURL)
		} catch (error) {
			console.log("Error getting project image: " + error)
		}
	}

	const getNewBannerImage = async () => {
		try {
			const signedURL = await Storage.get(bannerImageKey, { level: "public" })
			setBannerImageURL(signedURL)
		} catch (error) {
			console.log("Error getting project image: " + error)
		}
	}

	const loadExistingProfileImages = async () => {
		try {
			const signedAvatarURL = await Storage.get(loadProfileData.avatarImgFile.key, { level: "public" })
			setAvatarImageURL(signedAvatarURL)
			const signedBannerURL = await Storage.get(loadProfileData.bannerImgFile.key, { level: "public" })
			setBannerImageURL(signedBannerURL)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getUserProfileData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (avatarImageKey !== undefined) {
			getNewAvatarImage()
		}
		if (bannerImageKey !== undefined) {
			getNewBannerImage()
		}
		if (loadProfileData !== undefined && (avatarImageKey || bannerImageKey) === undefined) {
			loadExistingProfileImages()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [avatarImageKey, bannerImageKey, loadProfileData])

	return (
		<>
			<Header
				userDetails={props.userDetails}
				isLoggedIn={props.isLoggedIn}
				userAttribs={props.userAttribs}
				setLoading={props.setLoading}
				setDestinationPage={props.setDestinationPage}
			/>
			{loadProfileData && (
				<ProfileUpdate
					userDetails={props.userDetails}
					userAttribs={props.userAttribs}
					publicUserAttribs={loadProfileData}
					setInstagram={setInstagram}
					setFacebook={setFacebook}
					setTwitter={setTwitter}
					setBio={setBio}
					setJob={setJob}
					setCurrPassword={setCurrPassword}
					setNewPassword={setNewPassword}
					setNewPasswordConfirm={setNewPasswordConfirm}
					setUsername={setUsername}
					updateSocial={updateSocial}
					updateProfile={updateProfile}
					updatePassword={updatePassword}
					setLocation={setLocation}
					socialSuccess={socialSuccess}
					socialError={socialError}
					profileSuccess={profileSuccess}
					profileError={profileError}
					passwordSuccess={passwordSuccess}
					passwordError={passwordError}
					uploadNewAvatarImage={uploadNewAvatarImage}
					avatarFile={avatarFile}
					setAvatarFile={setAvatarFile}
					avatarImageURL={avatarImageURL}
					uploadNewBannerImage={uploadNewBannerImage}
					bannerFile={bannerFile}
					setBannerFile={setBannerFile}
					bannerImageURL={bannerImageURL}
				/>
			)}
			<Footer />
		</>
	)
}

export default ProfileUpdatePage
