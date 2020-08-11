import React from 'react'
import data from './data'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  console.log(data)
  data.map(item => console.log(item.name))
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {
            data.map(item => {
              return (
                <ProjectCard
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
                date={item.date}
                commentcount={item.commentcount}
                viewcount={item.viewcount}
                revisioncount={item.revisioncount}
                username={item.username}
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