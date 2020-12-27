/*
	Filename: 		ProjectGrid.js
	Description: 	A React functional component used to display a grid of user project cards
	Author: 		Ross Bishop
*/

import React from "react"
import cx from "classnames"
import ProjectCardStyles from "./css/projectcard.module.css"

import ProjectCard from "./ProjectCard"

// Calculate the total number of comments on a project across all revisions and return the calculated result
export default function ProjectGrid(props) {
	function calculateCounts(projectId) {
		var commentCount = 0
		for (var revisions = 0; revisions < props.projectData[projectId].revisions.items.length; revisions++) {
			var commentLength = props.projectData[projectId].revisions.items[revisions].comments.items.length
			commentCount += commentLength
		}

		return commentCount
	}

	return (
		<div className={cx("album", "mt-3", "mb-5", ProjectCardStyles.gridBg)}>
			<div className="container">
				<div className="row">
					{/* For each project in array of loaded data, display a project card */}
					{props.projectData.map((item, index) => {
						return (
							<ProjectCard
								key={index}
								name={item.projectName}
								img={item.revisions.items[item.revisions.items.length - 1].imgSrc}
								description={item.projectDescription}
								date={item.createdAt.split("T")[0]}
								commentcount={calculateCounts(index)}
								//viewcount={item.viewcount}
								revisioncount={item.revisions.items.length}
								username={item.owner}
								link={`/project/${item.id}`}
								setLoading={props.setLoading}
								setDestinationPage={props.setDestinationPage}
								imgKey={item.revisions.items[item.revisions.items.length - 1].imgFile.key}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
