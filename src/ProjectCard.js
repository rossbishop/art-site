import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
              <title>Placeholder</title>
              <img alt={props.name} className='card-img-top' src={props.img} />
          <div className="card-body">
              <p className="card-text project-description">{props.description}</p>
              <div className="card-text">
                  <small className="text-muted">{props.date}</small>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary button-view">View</button>
                  </div>
                  <small className="project-info-icons"><span>{props.commentcount}</span> 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/message_writing.svg"/><span> / {props.revisioncount}</span> 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/write.svg"/><span>/ {props.viewcount}</span> 
                      <img className="comms-img" src="https://systemuicons.com/images/icons/user_male.svg"/>
                  </small>
              </div>
        </div>
      </div>
    </div>
    
  )
}