import React, {Fragment, useState} from 'react' 
import CommentCard from './CommentCard'
import GalleryListItem from './GalleryListItem'
import GalleryItem from './GalleryItem'

export default function ProjectModule(props) {

    const [currentProjectState, updateCurrentProject] = useState({currentId: props.initialProjectDataState})

    return (
        <Fragment>
            <div className="container-wrap">
                <div className="container-fluid d-flex justify-content-center carousel-container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">

                            {
                                props.projectData.slice().reverse().map(item => {
                                    return (
                                        <GalleryListItem
                                            id={item.id}
                                            isLatest={props.projectData.length}
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
                                            imgSrc={item.imgSrc}
                                            name={item.name}
                                            description={item.description}
                                        />
                                    )
                                })
                            }   
                            
                            {/*<div className="carousel-item active">
                                <img className="gallery-img" src={require("./img/destination_tokyo.jpg")} alt="..."/>
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h5>Latest Revision</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo nulla ut dictum venenatis. Etiam tincidunt est vestibulum orci lobortis, a vestibulum justo interdum. Nam non lacus mollis, maximus mauris sed, maximus lacus. Sed interdum efficitur tempor. Pellentesque nibh ipsum, accumsan vel augue vitae, posuere viverra nulla. Aliquam eu lacinia odio. Mauris congue dapibus eros et dapibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="gallery-img" src={require("./img/mustard-chef.jpg")} alt="..."/>
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h5>Latest Revision</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo nulla ut dictum venenatis. Etiam tincidunt est vestibulum orci lobortis, a vestibulum justo interdum. Nam non lacus mollis, maximus mauris sed, maximus lacus. Sed interdum efficitur tempor. Pellentesque nibh ipsum, accumsan vel augue vitae, posuere viverra nulla. Aliquam eu lacinia odio. Mauris congue dapibus eros et dapibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="gallery-img" src={require("./img/pretty-pictchur.jpg")} alt="..."/>
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h5>Latest Revision</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo nulla ut dictum venenatis. Etiam tincidunt est vestibulum orci lobortis, a vestibulum justo interdum. Nam non lacus mollis, maximus mauris sed, maximus lacus. Sed interdum efficitur tempor. Pellentesque nibh ipsum, accumsan vel augue vitae, posuere viverra nulla. Aliquam eu lacinia odio. Mauris congue dapibus eros et dapibus.</p>
                                    </div>
                                </div>
                            </div>*/}
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
                            shortcomment={item.shortcomment}
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