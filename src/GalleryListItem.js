/*
	Filename: 		GalleryListItem.js
	Description: 	A React functional component used for displaying numbered carousel list items which correspond to user revisions in projects
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"

export default function GalleryListItem(props) {
	return (
		<li data-target="#galleryCarousel" data-slide-to={props.id} className={props.selected === props.id ? "active" : ""}>
			<button
				type="button"
				data-cy="carouselLi"
				className={props.isLatest - 1 === props.id ? "btn btn-info btn-sm" : "btn btn-secondary btn-sm"}
				// When list item is clicked, set current selected revision to the selected id in the parent component
				onClick={() => {
					props.projectUpdateState({ currentId: props.id })
				}}
			>
				{props.id + 1}
			</button>
		</li>
	)
}
