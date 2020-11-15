import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import NewProjectStyles from "./css/newproject.module.css"

import cx from "classnames"

export default function NewProject(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form className={NewProjectStyles.formProfileUpdate}>
						<h1 className="h3 mb-3 mt-4 font-weight-normal">Create New Project</h1>
						<h4 className="mt-3">Upload First Revision</h4>
						<div className="row d-flex align-items-center">
							<div className="d-flex flex-column col-4">
								<h6>Uploaded Content:</h6>
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
									onClick={e => {
										e.preventDefault()
										props.uploadNewProjectImage(props.revisionFile)
									}}
								>
									Upload
								</button>
							</div>
						</div>
						<h4 className="mt-3">Project Name</h4>
						<label htmlFor="inputProjectName" className="sr-only">
							Enter New Project Name
						</label>
						<input
							type="projectDetail"
							id="inputProjectName"
							className={cx(NewProjectStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new project name"
							onChange={event => props.setProjectName(event.target.value)}
							required
							autoFocus
						/>
						<h4>Project Description:</h4>
						<label htmlFor="inputProjectDescription" className="sr-only">
							Enter Project Description
						</label>
						<input
							type="projectDetail"
							id="inputProjectDescription"
							className={cx(NewProjectStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new project description"
							onChange={event => props.setProjectDescription(event.target.value)}
							required
							autoFocus
						/>
						<h4>Initial Revision Name:</h4>
						<label htmlFor="inputRevisionName" className="sr-only">
							Enter Revision Name
						</label>
						<input
							type="projectDetail"
							id="inputRevisionName"
							className={cx(NewProjectStyles.formControl, "mb-3", "py-2", "pl-0")}
							placeholder="Enter new project name"
							onChange={event => props.setRevName(event.target.value)}
							required
							autoFocus
						/>
						<h4>Initial Revision Description:</h4>
						<textarea
							className={cx(NewProjectStyles.formControl, NewProjectStyles.revDescBox)}
							id="bioTextArea"
							rows="5"
							placeholder="Enter a concise description for your initial revision"
							onChange={event => props.setRevDescription(event.target.value)}
						></textarea>
						{props.projectSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Created project successfully - redirecting to project...
							</div>
						)}
						{props.projectError.isError && (
							<div className="alert alert-danger" role="alert">
								{props.projectError.message}
							</div>
						)}
						<button
							className={cx(NewProjectStyles.btnProjectCreate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")}
							type="submit"
							onClick={e => {
								e.preventDefault()
								props.createNewProject(props.projectName, props.projectDescription)
							}}
						>
							Create Project
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
