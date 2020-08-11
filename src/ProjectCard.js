import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
              <title>Placeholder</title>
              <img alt={props.name} className='card-img-top' src={props.img} />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">{props.name}</text>
          </svg>
          <div className="card-body">
              <p className="card-text project-description">{props.description}</p>
              <div className="card-text">
                  <small className="text-muted">{props.date}</small>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary button-view">View</button>
                  </div>
                  <small className="project-info-icons">{props.commentcount} 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/message_writing.svg"> / {props.revisioncount} 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/write.svg"> / {props.viewcount} 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/user_male.svg">
                  </small>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}