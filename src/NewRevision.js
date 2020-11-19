/*
	Filename: 		NewRevision.js
	Description: 	A React functional component used to create revisions to user content
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import NewProjectStyles from "./css/newrevision.module.css"

import cx from "classnames"

export default function NewRevision(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form className={NewProjectStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Create New Revision</h1>
						<h4 className="mt-3">Upload Content Revision</h4>
						<div className="row d-flex align-items-center">
							<div className="d-flex flex-column col-4">
								<h6>Uploaded Content:</h6>
								{/* When content is uploaded, display it */}
								{props.revisionImageURL && (
									<img
										className={NewProjectStyles.profileImgSmall}
										src={props.revisionImageURL}
										alt="Revision Content"
									/>
								)}
							</div>
							<div className="d-flex flex-column col-12">
								<input
									type="file"
									accept="image/png"
									// When the user chooses file, store it in parent component state
									onChange={event => props.setRevisionFile(event.target.files[0])}
									id="inputFile"
									className={cx(NewProjectStyles.formControl, "my-3", "py-2", "pl-0")}
									placeholder="Local Path"
									defaultValue=""
									required
									autoFocus
								/>
								<button
									type="button"
									className={cx("btn", "btn-info", NewProjectStyles.imgButton)}
									// When the user clicks the upload button, start uploading the file they have chosen to the S3 bucket
									onClick={e => {
										e.preventDefault()
										props.uploadNewRevisionImage(props.revisionFile)
									}}
								>
									Upload
								</button>
							</div>
						</div>
						<h4 className="mt-3">New Revision Name</h4>
						<label htmlFor="inputProjectName" className="sr-only">
							Enter New Project Name
						</label>
						<input
							type="projectDetail"
							id="inputProjectName"
							className={cx(NewProjectStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new revision name"
							// As user types in revision name, update state in parent component
							onChange={event => props.setRevisionName(event.target.value)}
							required
							autoFocus
						/>
						<h4>New Revision Description:</h4>
						<textarea
							className={cx(NewProjectStyles.formControl, NewProjectStyles.revDescBox)}
							id="bioTextArea"
							rows="5"
							placeholder="Enter a concise description for your new revision"
							// As user types in revision description, update state in parent component
							onChange={event => props.setRevisionDescription(event.target.value)}
						></textarea>
						{/* If revision creates successfully, notify the user and inform them they are to be redirected to the update project*/}
						{props.revisionSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Revision created successfully - redirecting to project...
							</div>
						)}
						{/* If there is an error creating the new revision, notify the user */}
						{props.revisionError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.revisionError.message}
							</div>
						)}
						<button
							className={cx(NewProjectStyles.btnProjectCreate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							type="submit"
							// When user clicks the create revision button, initiate the GraphQL mutation via the Amplify API
							onClick={e => {
								e.preventDefault()
								props.createNewRevision()
							}}
						>
							Create Revision
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
