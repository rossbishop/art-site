/*
	Filename: 		ProfileUpdate.js
	Description: 	A React functional component used to create revisions to user content
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import ProfileUpdateStyles from "./css/profileupdate.module.css"

import cx from "classnames"

export default function ProfileUpdate(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<form className={ProfileUpdateStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Update Profile Details</h1>
						<div className="row d-flex align-items-center">
							<div className="d-flex flex-column col-4">
								<h6>Avatar Image:</h6>
								{/* If an existing or new avatar is present, display it here */}
								{props.avatarImageURL && (
									<img className={ProfileUpdateStyles.profileImgSmall} src={props.avatarImageURL} alt="User Avatar" />
								)}
							</div>
							<div className="d-flex flex-column col-8">
								<div className="d-flex flex-row">
									<div className="d-flex flex-column col-12">
										<input
											type="file"
											accept="image/png"
											// When the user chooses file, store it in parent component state
											onChange={event => props.setAvatarFile(event.target.files[0])}
											id="inputAvatar"
											className={cx(ProfileUpdateStyles.formControl, "my-3", "py-2", "pl-0")}
											placeholder="Local Path"
											defaultValue=""
											required
											autoFocus
										/>
										<button
											type="button"
											className={cx("btn", "btn-secondary", ProfileUpdateStyles.imgButton)}
											// When the user clicks the upload button, start uploading the file they have chosen to the S3 bucket
											onClick={e => {
												e.preventDefault()
												props.uploadNewAvatarImage(props.avatarFile)
											}}
										>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row d-flex align-items-center">
							<div className="d-flex flex-column col-4">
								<h6>Banner Image:</h6>
								{/* If an existing or new banner is present, display it here */}
								{props.bannerImageURL && (
									<img className={ProfileUpdateStyles.profileImgSmall} src={props.bannerImageURL} alt="User Banner" />
								)}
							</div>
							<div className="d-flex flex-column col-8">
								<div className="d-flex flex-row">
									<div className="d-flex flex-column col-12">
										<input
											type="file"
											accept="image/png"
											// When the user chooses file, store it in parent component state
											onChange={event => props.setBannerFile(event.target.files[0])}
											id="inputBanner"
											className={cx(ProfileUpdateStyles.formControl, "my-3", "py-2", "pl-0")}
											placeholder="Local Path"
											defaultValue=""
											required
											autoFocus
										/>
										<button
											type="button"
											className={cx("btn", "btn-secondary", ProfileUpdateStyles.imgButton)}
											// When the user clicks the upload button, start uploading the file they have chosen to the S3 bucket
											onClick={e => {
												e.preventDefault()
												props.uploadNewBannerImage(props.bannerFile)
											}}
										>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
						<h6 className="mt-3">Change Username:</h6>
						<label htmlFor="inputUsername" className="sr-only">
							Current Username
						</label>
						<input
							type="userDetail"
							id="inputUsername"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new username"
							// As user types in username, update state in parent component
							onChange={event => props.setUsername(event.target.value)}
							defaultValue={props.userAttribs.preferred_username}
							required
							autoFocus
						/>
						<h6>Change Position:</h6>
						<label htmlFor="inputPosition" className="sr-only">
							Current Position Title
						</label>
						<input
							type="userDetail"
							id="inputPosition"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new position title"
							// As user types in position, update state in parent component
							onChange={event => props.setJob(event.target.value)}
							defaultValue={props.publicUserAttribs.position}
							required
							autoFocus
						/>
						<h6>Change Location:</h6>
						<label htmlFor="inputLocation" className="sr-only">
							Current Location
						</label>
						<input
							type="userDetail"
							id="inputLocation"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new location"
							// As user types in their location, update state in parent component
							onChange={event => props.setLocation(event.target.value)}
							defaultValue={props.publicUserAttribs.location}
							required
							autoFocus
						/>
						<h6>Change Bio:</h6>
						<textarea
							className={cx(ProfileUpdateStyles.formControl, ProfileUpdateStyles.bioBox)}
							id="bioTextArea"
							rows="5"
							// As user types in their bio, update state in parent component
							onChange={event => props.setBio(event.target.value)}
							defaultValue={props.publicUserAttribs.bio}
						></textarea>
						{/* If profile details update successfully, notify the user */}
						{props.profileSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Updated profile details successfully
							</div>
						)}
						{/* If there is an error updating profile details, notify the user */}
						{props.profileError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.profileError.message}
							</div>
						)}
						<button
							className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							// When user clicks the update profile button, initiate the GraphQL mutation via the Amplify API
							onClick={e => {
								e.preventDefault()
								props.updateProfile()
							}}
							type="submit"
						>
							Update Profile
						</button>
					</form>
				</div>
				<div className="col-6">
					<form className={ProfileUpdateStyles.formProfileUpdate}>
						<h2 className="h3 mb-3 mt-4 font-weight-normal">Update Social Media</h2>
						<h6 className="mt-3">Change Instagram Handle:</h6>
						<label htmlFor="inputInstagram" className="sr-only">
							Instagram
						</label>
						<input
							type="userDetail"
							id="inputInstagram"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Instagram Handle"
							// As user types in their instagram handle, update state in parent component
							onChange={event => props.setInstagram(event.target.value)}
							defaultValue={props.publicUserAttribs.instagram}
							required
						/>
						<h6>Change Twitter Handle:</h6>
						<label htmlFor="inputTwitter" className="sr-only">
							Twitter
						</label>
						<input
							type="userDetail"
							id="inputTwitter"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Twitter Handle"
							// As user types in their twitter handle, update state in parent component
							onChange={event => props.setTwitter(event.target.value)}
							defaultValue={props.publicUserAttribs.twitter}
							required
						/>
						<h6>Change Facebook Handle:</h6>
						<label htmlFor="inputFacebook" className="sr-only">
							Facebook
						</label>
						<input
							type="userDetail"
							id="inputFacebook"
							className={cx(ProfileUpdateStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter Facebook Handle"
							// As user types in their facebook handle, update state in parent component
							onChange={event => props.setFacebook(event.target.value)}
							defaultValue={props.publicUserAttribs.facebook}
							required
						/>
						{/* If social details update successfully, notify the user */}
						{props.socialSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Updated social details successfully
							</div>
						)}
						{/* If there is an error updating social details, notify the user */}
						{props.socialError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.socialError.message}
							</div>
						)}
						<button
							className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							// When user clicks the update social media button, initiate the GraphQL mutation via the Amplify API
							onClick={e => {
								e.preventDefault()
								props.updateSocial()
							}}
							type="submit"
						>
							Update Social Media
						</button>
					</form>
					<form className={ProfileUpdateStyles.formProfileUpdate}>
						<h2 className="h3 mb-3 mt-4 font-weight-normal">Update Password</h2>
						<label htmlFor="inputCurrentPassword" className="sr-only">
							Current Password
						</label>
						<input
							type="password"
							id="inputCurrentPassword"
							className={cx(ProfileUpdateStyles.formControl, "my-3", "py-2", "pl-0")}
							placeholder="Enter Current Password"
							// As user types in their current password, update state in parent component
							onChange={event => props.setCurrPassword(event.target.value)}
							required
						/>
						<label htmlFor="inputNewPassword" className="sr-only">
							New Password
						</label>
						<input
							type="password"
							id="inputNewPassword"
							className={cx(ProfileUpdateStyles.formControl, "my-3", "py-2", "pl-0")}
							placeholder="Enter New Password"
							// As user types in their new password, update state in parent component
							onChange={event => props.setNewPassword(event.target.value)}
							required
						/>
						<label htmlFor="inputConfirmPassword" className="sr-only">
							Password Confirmation
						</label>
						<input
							type="password"
							id="inputConfirmPassword"
							className={cx(ProfileUpdateStyles.formControl, "my-3", "py-2", "pl-0")}
							placeholder="Confirm New Password"
							// As user types in their password confirmation, update state in parent component
							onChange={event => props.setNewPasswordConfirm(event.target.value)}
							required
						/>
						{/* If password updates successfully, notify the user */}
						{props.passwordSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Updated password successfully
							</div>
						)}
						{/* If there is an error updating password, notify the user */}
						{props.passwordError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.passwordError.message}
							</div>
						)}
						<button
							className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							// When user clicks the update password button, initiate the password update via the Amplify Auth API
							onClick={e => {
								e.preventDefault()
								props.updatePassword()
							}}
							type="submit"
						>
							Update Password
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
