import React, {Fragment, useState} from 'react' 
import CommentCard from './CommentCard'
import GalleryListItem from './GalleryListItem'
import GalleryItem from './GalleryItem'

import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import './css/carousel.css'
import projectModuleStyles from './css/projectmodule.module.css'
import cx from 'classnames'

export default function ProjectModule(props) {

    const [currentProjectState, updateCurrentProject] = useState({currentId: props.initialProjectDataState})

    return (
        <Fragment>
            <div className={projectModuleStyles["container-wrap"]}>
                <div className="container-fluid d-flex justify-content-center carousel-container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">
                            {
                                props.projectRevisionData.map((item, index) => {
                                    return (
                                        <GalleryListItem
                                            id={index}
                                            isLatest={props.projectRevisionData.length}
                                            selected={currentProjectState.currentId}
                                            projectUpdateState={updateCurrentProject}
                                        />
                                    )
                                })
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                props.projectRevisionData.map((item, index) => {
                                    return (
                                        <GalleryItem
                                            id={(index)+1}
                                            isLatest={props.projectRevisionData.length}
                                            selected={currentProjectState.currentId}
                                            imgSrc={item.imgSrc}
                                            name={item.name}
                                            description={item.description}
                                        />
                                    )
                                })
                            }   
                        </div>

                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                        </div>
                </div>
            </div>
            <div className="container">
            <h3>{props.projectDetails.projectName} by <a href={`/user/${props.projectDetails.owner}`}>{props.projectDetails.owner}</a></h3>
            <button type="button" className={cx("btn", "btn-success", projectModuleStyles.commentButton)}><Link className={projectModuleStyles.links} to="/newrevision">Add Revision</Link></button>
            <p className={projectModuleStyles.projectText}>{props.projectDetails.projectDescription}</p>
            <h4>Comments</h4>
            <div className="form-group">
                <label form="commentFormInput1">Type a comment:</label>
                <textarea className={cx(projectModuleStyles.commentBox, "form-control")} id="commentFormTextArea1" rows="1"></textarea>
            </div>
            <button type="button" className={cx("btn", "btn-primary", projectModuleStyles.commentButton)}>Submit</button>
            <button type="button" className={cx("btn", "btn-danger", projectModuleStyles.commentButton)}>Cancel</button>
            {/* {
                props.projectRevisionData[currentProjectState.currentId].comments.map(item => {
                    return (
                        <CommentCard
                            id={item.id}
                            username={item.username}
                            time={item.time}
                            date={item.date}
                            comment={item.comment}
                            likes={item.likes}
                        />
                    )
                })
            } */}
            </div>
        </Fragment>
    )
}