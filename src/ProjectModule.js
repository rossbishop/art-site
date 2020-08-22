import React, {Fragment, useState} from 'react' 
import CommentCard from './CommentCard'
import GalleryListItem from './GalleryListItem'
import GalleryItem from './GalleryItem'
import TestCarousel from './TestCarousel'

export default function ProjectModule(props) {

    const [currentProjectState, updateCurrentProject] = useState({currentId: props.initialProjectDataState})

    return (
        <Fragment>
            <div className="container-wrap">
                <div className="container-fluid d-flex justify-content-center carousel-container">

                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">
                            {
                                props.projectData.map(item => {
                                    return (
                                        <GalleryListItem
                                            id={item.id}
                                            isLatest={props.projectData.length}
                                            selected={currentProjectState.currentId}
                                            projectUpdateState={updateCurrentProject}
                                        />
                                    )
                                })
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                props.projectData.map(item => {
                                    return (
                                        <GalleryItem
                                            id={(item.id)+1}
                                            isLatest={props.projectData.length}
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
            <div class="container">
            <h3>Comments</h3>
            <div class="form-group">
                <label for="commentFormInput1">Type a comment:</label>
                <textarea class="form-control comment-box" id="commentFormTextArea1" rows="1"></textarea>
            </div>
            <button type="button" class="btn btn-primary comment-button">Submit</button>
            <button type="button" class="btn btn-danger comment-button">Cancel</button>
            {
                props.projectData[currentProjectState.currentId].comments.map(item => {
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
            }
            </div>
        </Fragment>
    )
}