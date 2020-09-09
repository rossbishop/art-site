import React, { createContext } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import userProjectStyles from './css/userprojects.module.css'
import cx from 'classnames'


export default function UserProjects(props) {

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Project Picture</text>
                            </svg>
                            <div className="card-body">
                                <p className={cx(projectDescription, "card-text")}>This is a description of a project</p>
                                <div className="card-text">
                                    <small className="text-muted">24/7/20</small>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary button-view">View</button>
                                    </div>
                                    <small className="project-info-icons">n 
                                        <img className={userProjectStyles.commsImg} src="https://systemuicons.com/images/icons/message_writing.svg"/> / n 
                                        <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/write.svg"/> / n 
                                        <img className={projectCardStyles.commsImg} src="https://systemuicons.com/images/icons/user_male.svg"/>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}