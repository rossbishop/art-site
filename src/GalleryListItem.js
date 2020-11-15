import React from "react"

import "bootstrap/dist/css/bootstrap.css"

export default function GalleryListItem(props) {
	return (
		<li data-target="#galleryCarousel" data-slide-to={props.id} className={props.selected === props.id ? "active" : ""}>
			<button
				type="button"
				className={props.isLatest - 1 === props.id ? "btn btn-info btn-sm" : "btn btn-secondary btn-sm"}
				onClick={() => {
					props.projectUpdateState({ currentId: props.id })
				}}
			>
				{props.id + 1}
			</button>
		</li>
	)
}
