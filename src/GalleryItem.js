/*
	Filename: 		GalleryItem.js
	Description: 	A React functional component used for displaying user revision content on project pages in a carousel
	Author: 		Ross Bishop
*/

import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import galleryItemStyles from "./css/galleryitem.module.css"
import "./css/carousel.css"

import AmplifyImage from "./AmplifyImage"

export default function GalleryItem(props) {
	return (
		<div className={props.selected === props.id - 1 ? "carousel-item active" : "carousel-item"}>
			<AmplifyImage imgKey={props.imgKey} style={galleryItemStyles.galleryImg} />
			<div className="container">
				<div className="carousel-caption">
					<h5 data-cy="revisionName">{props.name}</h5>
					<p data-cy="revisionDescription">{props.description}</p>
				</div>
			</div>
		</div>
	)
}
