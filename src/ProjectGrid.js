import React from "react"

import ProjectCard from "./ProjectCard"

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
		<div className="album mt-3 mb-5 bg-light">
			<div className="container">
				<div className="row">
					{props.projectData.map((item, index) => {
						return (
							<ProjectCard
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
