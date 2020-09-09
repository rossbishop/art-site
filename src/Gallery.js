import React from 'react'

export default function Gallery(props) {
    return (
        <div className="container-wrap">
            <div className="container-fluid d-flex justify-content-center carousel-container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                    <ol className="carousel-indicators">
                        {/*<li data-target="#myCarousel" data-slide-to="0" className="active"><button type="button" className="btn btn-info btn-sm" onClick={ () => {props.projectCallback(9)} }>10</button></li>*/}
                        {/*<li data-target="#myCarousel" data-slide-to="1"><button type="button" className="btn btn-secondary btn-sm" onClick={ () => {props.projectCallback(8)} }>9</button></li>*/}
                        {/*<li data-target="#myCarousel" data-slide-to="2"><button type="button" className="btn btn-secondary btn-sm" onClick={ () => {props.projectCallback(7)} }>8</button></li>*/}
                    </ol>
                    <div className="carousel-inner">
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

    )
}