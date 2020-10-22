import React from 'react'
import data from './FrontPageDummyData'
import ProjectCard from './ProjectCard'

export default function ProjectGrid(props) {

  function calculateCounts(projectId)
  {
    
    var commentCount = 0;
    //console.log("REVISIONS LENGTH: " + props.projectData[projectId].revisions.items.length)
    for(var revisions = 0; revisions < props.projectData[projectId].revisions.items.length; revisions++)
    {
      var commentLength = props.projectData[projectId].revisions.items[revisions].comments.items.length
      console.log("COMMENT LENGTH" + commentLength)
      commentCount += commentLength
    }

    return(commentCount)
  }

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {
            props.projectData.map((item, index) => {

              return (
                <ProjectCard
                  name={item.projectName}
                  img={item.revisions.items[0].imgSrc}
                  description={item.projectDescription}
                  date={item.createdAt.split('T')[0]}
                  commentcount={calculateCounts(index)}
                  //viewcount={item.viewcount}
                  revisioncount={item.revisions.items.length}
                  username={item.owner}
                  link={`/project/${item.id}`}
                />
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}