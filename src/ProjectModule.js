import React, {Fragment, useState, useEffect} from 'react' 
import CommentCard from './CommentCard'
import GalleryListItem from './GalleryListItem'
import GalleryItem from './GalleryItem'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'

import {Link, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import './css/carousel.css'
import projectModuleStyles from './css/projectmodule.module.css'
import cx from 'classnames'

export default function ProjectModule(props) {

    const [currentProjectState, updateCurrentProject] = useState({currentId: props.initialProjectDataState})
    const [doesOwnProject, setOwnProject] = useState(false)
    const [commentSuccess, setCommentSuccess] = useState({isSuccess: false, message: ""})
    const [commentError, setCommentError] = useState({isError: false, message: ""})
    const [shouldRevisionRedirect, setRedirect] = useState(false)


    function reloadPage() {
        window.location.reload()
    }

    useEffect(() => {

        if(props.userDetails != false)
        {
            if(props.userDetails.username==props.projectDetails.owner)
            {
                setOwnProject(true)
            }
        }
    }, [])

    const createNewComment = async () => {
        try {
            const commentData = {
                revisionID: props.projectDetails.revisions.items[currentProjectState.currentId].id,
                comment: props.comment,
                likeCount: 0
            }
            const commentCall = await API.graphql({query: mutations.createComment, variables: {input: commentData}})
            console.log('Success creating comment: ', commentCall)
            setCommentSuccess({isSuccess: true, message: "Success!"})
            setTimeout(() => {reloadPage();}, 3000);
        }
        catch (error) {
            console.log('Error creating comment: ', error)
            setCommentError({isError: true, message: error})
        }
    }

    return (
        <Fragment>
            {/* {shouldRevisionRedirect && (
                <Redirect
                    to={{
                    //pathname: `/newrevision/${window.location.pathname.split('/')[2]}`
                        pathname: `/newrevision/${props.projectDetails.id}`,
                        state: { from: location }
                    }}
                />
            )
            } */}
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
                                            imgKey={item.imgFile.key}
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
            <h3>{props.projectDetails.projectName} by <Link to="/loading" onClick={event => {props.setLoading(true);props.setDestinationPage(`/user/${props.projectDetails.owner}`)}}>{props.projectDetails.owner}</Link></h3>
            {doesOwnProject &&
                <button type="button" className={cx("btn", "btn-success", projectModuleStyles.commentButton)} onClick={event => {props.setLoading(true);props.setDestinationPage(`/newrevision/${props.projectDetails.id}`)}}><Link className={projectModuleStyles.links} to={{pathname: "/loading", state: {routePath: `/newrevision/${window.location.pathname.split('/')[2]}`}}}>Add Revision</Link></button>
            }
            <p className={projectModuleStyles.projectText}>{props.projectDetails.projectDescription}</p>
            <h4>Comments</h4>
            {props.isLoggedIn &&
                <>
                    <div className="form-group">
                    <label form="commentFormInput1">Type a comment:</label>
                    <textarea className={cx(projectModuleStyles.commentBox, "form-control")} id="commentFormTextArea1" rows="1" onChange={event => props.setComment(event.target.value)}></textarea>
                    </div>
                    {commentSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">Comment posted successfully</div>
                        )
                    }
                    {commentError.isError && (
                        <div className="alert alert-danger" role="alert">{commentError.message}</div>)
                    }
                    <button type="button" className={cx("btn", "btn-primary", projectModuleStyles.commentButton)} type="submit" onClick={(e) => {e.preventDefault();createNewComment();}}>Submit</button>
                    {/*<button type="button" className={cx("btn", "btn-danger", projectModuleStyles.commentButton)}>Cancel</button>*/}
                </>
            }
            {
                props.projectRevisionData[currentProjectState.currentId].comments.items.map(item => {
                    return (
                        <CommentCard
                            id={item.id}
                            username={item.owner}
                            time={item.time}
                            date={item.date}
                            comment={item.comment}
                            likes={item.likes}
                        />
                    )
                })
            }
            </div>
        </Fragment>
    )
}