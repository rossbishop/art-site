/*
	Filename: 		ProjectCard.js
	Description: 	A React functional component used to display an overview of user projects
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import projectCardStyles from "./css/projectcard.module.css"

import AmplifyImage from "./AmplifyImage"
import { Link } from "react-router-dom"

import cx from "classnames"

export default function ProjectCard(props) {
	return (
		<div className="col-md-4">
			<div className="card mb-4 shadow-sm">
				<title>Placeholder</title>
				<Link
					data-cy="projectImageLink"
					className={projectCardStyles.links}
					to="/loading"
					// When user clicks the link, route to the project page
					onClick={event => {
						props.setLoading(true)
						props.setDestinationPage(props.link)
					}}
				>
					<AmplifyImage imgKey={props.imgKey} style={projectCardStyles.cardImage} />
				</Link>
				<div className="card-body">
					<div>
						<Link
							className={projectCardStyles.links}
							to="/loading"
							// When user clicks the card, route to the project page
							onClick={event => {
								props.setLoading(true)
								props.setDestinationPage(props.link)
							}}
						>
							<h5 className="project-name" data-cy="projectName">{props.name} </h5>
						</Link>
						<h5 className="project-author text-muted">
							by{" "}
							<Link
								to="/loading"
								// When user clicks the link, route to the project owner's profile page
								onClick={event => {
									props.setLoading(true)
									props.setDestinationPage(`/user/${props.username}`)
								}}
							>
								{props.username}
							</Link>
						</h5>
					</div>
					<p className={cx("card-text", projectCardStyles.projectDescription)}>{props.description}</p>
					<div className="card-text">
						<div className="d-flex justify-content-between align-items-center">
							<small className="text-muted">{props.date}</small>
							<small className={projectCardStyles.projectInfoIcons}>
								<span>{props.commentcount}</span>
								<img
									className={projectCardStyles.commsImg}
									src="https://systemuicons.com/images/icons/message_writing.svg"
									alt="Comment Count"
								/>
								<span> / {props.revisioncount}</span>
								<img
									className={projectCardStyles.commsImg}
									src="https://systemuicons.com/images/icons/write.svg"
									alt="Revision Count"
								/>{" "}
								{/*<span> / {props.viewcount}</span>*/}
								{/*<img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/user_male.svg"/>*/}
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
