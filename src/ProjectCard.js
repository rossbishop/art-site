import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import projectCardStyles from './css/projectcard.module.css'
import cx from 'classnames'

import {Link} from './Imports'

export default function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
              <title>Placeholder</title>
              <img alt={props.name} className='card-img-top' src={props.img} />
          <div className="card-body">
              <div>
                <h5 className="project-name">{props.name} </h5>
                <h5 className="project-author text-muted">&nbsp;by <Link to={`/user/${props.username}`}>{props.username}</Link></h5>
              </div> 
              <p className={cx("card-text", projectCardStyles.projectDescription)}>{props.description}</p>
              <div className="card-text">
                  <small className="text-muted">{props.date}</small>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <button type="button" className={cx(projectCardStyles.buttonView, "btn", "btn-sm", "btn-outline-secondary", projectCardStyles.btnMod)}><Link className={projectCardStyles.links} to={props.link}>View</Link></button>
                  </div>
                  <small className={projectCardStyles.projectInfoIcons}><span>{props.commentcount}</span> 
                      <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/message_writing.svg"/><span> / {props.revisioncount}</span> 
                      <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/write.svg"/><span>/ {props.viewcount}</span> 
                      <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/user_male.svg"/>
                  </small>
              </div>
        </div>
      </div>
    </div>
    
  )
}