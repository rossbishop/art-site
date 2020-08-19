import React, {Fragment, useState} from 'react' 
import CommentCard from './CommentCard'
import GalleryListItem from './GalleyListItem'

export default function ProjectModule(props) {

    const [currentProjectState, updateCurrentProject] = useState({currentId: props.initialProjectDataState})

    const [commentDataState, updateCommentData] = useState({commentData: props.projectData[currentProjectState.currentId].comments})
    const [galleryDataState, updateGalleryData] = useState({galleryData: props.projectData})

    return (
        <Fragment>
            <div className="container-wrap">
                <div className="container-fluid d-flex justify-content-center carousel-container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <ol className="carousel-indicators">
                            
                            
                            return (
                                <GalleryListItem
                                    id={currentProjectState.currentId}
                                />
                            )

                            {
                                galleryDataState.galleryData.map(item => {
                                    return (
                                        <GalleryListItem
                                            id={(item.id)+1}
                                        />
                                    )
                                })
                            }
                            {/*<li data-target="#myCarousel" data-slide-to="0" className="active"><button type="button" className="btn btn-info btn-sm" onClick={ () => {updateCurrentProject({currentId: 9}); updateCurrentComments({currentComments: props.projectData[9].comments})}}>10</button></li>
                            <li data-target="#myCarousel" data-slide-to="1"><button type="button" className="btn btn-secondary btn-sm"               onClick={ () => {updateCurrentProject({currentId: 8}); updateCurrentComments({currentComments: props.projectData[8].comments})}}>9</button></li>
                            <li data-target="#myCarousel" data-slide-to="2"><button type="button" className="btn btn-secondary btn-sm"               onClick={ () => {updateCurrentProject({currentId: 7}); updateCurrentComments({currentComments: props.projectData[7].comments})}}>8</button></li>*/}
                        </ol>
                        <div className="carousel-inner">
                            {
                                galleryDataState.galleryData.map(item => {
                                    return (
                                        <GalleryListItem
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
                commentDataState.commentDataState.map(item => {
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