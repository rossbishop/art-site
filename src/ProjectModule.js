/*
	Filename: 		ProjectModule.js
	Description: 	A React functional component used to display user project information
	Author: 		Ross Bishop
*/

import React, { Fragment, useState, useEffect } from "react"

import "bootstrap/dist/css/bootstrap.css"
import "./css/carousel.css"
import projectModuleStyles from "./css/projectmodule.module.css"

import CommentCard from "./CommentCard"
import GalleryListItem from "./GalleryListItem"
import GalleryItem from "./GalleryItem"

import cx from "classnames"

import { API } from "aws-amplify"
import * as mutations from "./graphql/mutations"

import { Link } from "react-router-dom"

export default function ProjectModule(props) {
	const [currentProjectState, updateCurrentProject] = useState({ currentId: props.initialProjectDataState })
	const [doesOwnProject, setOwnProject] = useState(false)
	const [commentSuccess, setCommentSuccess] = useState({ isSuccess: false, message: "" })
	const [commentError, setCommentError] = useState({ isError: false, message: "" })

	// Reload page on call
	function reloadPage() {
		window.location.reload()
	}

	// If the current user's details match that of the project owner, note this in state
	useEffect(() => {
		if (props.userDetails !== false) {
			if (props.userDetails.username === props.projectDetails.owner) {
				setOwnProject(true)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Creates a new comment on a given revision in the form of a GraphQL model via the Amplify API
	// Then on success, notify the user the comment has been created and after 3 seconds reload the page to display the new comment
	const createNewComment = async () => {
		try {
			if (props.comment === undefined || props.comment === "") {
				throw new Error("You must enter comment text")
			} else {
				const commentData = {
					revisionID: props.projectDetails.revisions.items[currentProjectState.currentId].id,
					comment: props.comment,
					likeCount: 0
				}
				await API.graphql({ query: mutations.createComment, variables: { input: commentData } })
				setCommentSuccess({ isSuccess: true, message: "Success!" })
				setTimeout(() => {
					reloadPage()
				}, 3000)
			}
		} catch (error) {
			console.log("Error creating comment: ", error)
			setCommentError({ isError: true, message: error })
		}
	}

	return (
		<Fragment>
			<div className={projectModuleStyles["container-wrap"]}>
				<div className="container-fluid d-flex justify-content-center carousel-container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
						<ol className="carousel-indicators">
							{/* For each revision in array of loaded data, display a carousel list item */}
							{props.projectRevisionData.map((item, index) => {
								return (
									<GalleryListItem
										key={index}
										id={index}
										isLatest={props.projectRevisionData.length}
										selected={currentProjectState.currentId}
										projectUpdateState={updateCurrentProject}
									/>
								)
							})}
						</ol>
						<div className="carousel-inner">
							{/* For each revision in array of loaded data, display a carousel item */}
							{props.projectRevisionData.map((item, index) => {
								return (
									<GalleryItem
										key={index}
										id={index + 1}
										isLatest={props.projectRevisionData.length}
										selected={currentProjectState.currentId}
										imgSrc={item.imgSrc}
										name={item.name}
										description={item.description}
										imgKey={item.imgFile.key}
									/>
								)
							})}
						</div>

						<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<h3>
					{props.projectDetails.projectName} by{" "}
					<Link
						to="/loading"
						// When the user clicks the link, route to the project owner's user page
						onClick={event => {
							props.setLoading(true)
							props.setDestinationPage(`/user/${props.projectDetails.owner}`)
						}}
					>
						{props.projectDetails.owner}
					</Link>
				</h3>
				{doesOwnProject && (
					<button
						type="button"
						className={cx("btn", "btn-success", projectModuleStyles.commentButton)}
						// When the user clicks the add revision button, route to the add revision page for this project
						onClick={event => {
							props.setLoading(true)
							props.setDestinationPage(`/newrevision/${props.projectDetails.id}`)
						}}
					>
						<Link
							className={projectModuleStyles.links}
							to={{
								pathname: "/loading",
								state: { routePath: `/newrevision/${window.location.pathname.split("/")[2]}` }
							}}
						>
							Add Revision
						</Link>
					</button>
				)}
				<p className={projectModuleStyles.projectText}>{props.projectDetails.projectDescription}</p>
				<h4>Comments</h4>
				{/* If user is logged in, display the comment form */}
				{props.isLoggedIn && (
					<>
						<div className="form-group">
							<label form="commentFormInput1">Type a comment:</label>
							<textarea
								className={cx(projectModuleStyles.commentBox, "form-control")}
								id="commentFormTextArea1"
								rows="1"
								// As user types in comment, update state in parent component
								onChange={event => props.setComment(event.target.value)}
							></textarea>
						</div>
						{/* If comment is successfully posted, nofitfy the user */}
						{commentSuccess.isSuccess && (
							<div className="alert alert-success" role="alert">
								Comment posted successfully
							</div>
						)}
						{/* If there is an error posting a comment, nofitfy the user */}
						{commentError.isError && (
							<div className="alert alert-danger" role="alert">
								{commentError.message}
							</div>
						)}
						<button
							className={cx("btn", "btn-primary", projectModuleStyles.commentButton)}
							type="submit"
							// When the user clicks the submit button, initiate the GraphQL mutation via the Amplify API
							onClick={e => {
								e.preventDefault()
								createNewComment()
							}}
						>
							Submit
						</button>
					</>
				)}
				{/* For each revision in array of loaded data, display each comment for the revision in a comment card */}
				{props.projectRevisionData[currentProjectState.currentId].comments.items.map((item, index) => {
					return (
						<CommentCard
							key={index}
							id={item.id}
							username={item.owner}
							time={item.time}
							date={item.date}
							comment={item.comment}
							likes={item.likes}
						/>
					)
				})}
			</div>
		</Fragment>
	)
}
