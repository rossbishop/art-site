import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import projectCardStyles from './css/projectcard.module.css'
import cx from 'classnames'
import { AmplifyS3Image } from '@aws-amplify/ui-react';
import AmplifyImage from './AmplifyImage'

import { Link } from './Imports'

export default function ProjectCard(props) {

  return (

    <div className="col-md-4">

      <div className="card mb-4 shadow-sm">
        <title>Placeholder</title>
        <Link className={projectCardStyles.links} to="/loading" onClick={event => { props.setLoading(true); props.setDestinationPage(props.link) }}>
          <AmplifyImage
            imgKey={props.imgKey}
            style={projectCardStyles.cardImage}
          />
        </Link>
        <div className="card-body">
          <div>
            <h5 className="project-name">{props.name} </h5>
            <h5 className="project-author text-muted">by <Link to="/loading" onClick={event => { props.setLoading(true); props.setDestinationPage(`/user/${props.username}`) }}>{props.username}</Link></h5>
          </div>
          <p className={cx("card-text", projectCardStyles.projectDescription)}>{props.description}</p>
          <div className="card-text">
            
            <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{props.date}</small>
              <small className={projectCardStyles.projectInfoIcons}><span>{props.commentcount}</span>
                <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/message_writing.svg" /><span> / {props.revisioncount}</span>
                <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/write.svg" /> {/*<span> / {props.viewcount}</span>*/}
                {/*<img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/user_male.svg"/>*/}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}