import React from 'react'

export default function GalleryItem(props) {

console.log(props);
    return (
        <div className="carousel-item active"> {/* FIND OUT HOW TO INSERT PROPS WHERE THERE ARE SPEECH MARKS */}
            <img className="gallery-img" src={require("./img/destination_tokyo.jpg")} alt="..."/>
            <div className="container">
                <div className="carousel-caption">
                    <h5>Latest Revision</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo nulla ut dictum venenatis. Etiam tincidunt est vestibulum orci lobortis, a vestibulum justo interdum. Nam non lacus mollis, maximus mauris sed, maximus lacus. Sed interdum efficitur tempor. Pellentesque nibh ipsum, accumsan vel augue vitae, posuere viverra nulla. Aliquam eu lacinia odio. Mauris congue dapibus eros et dapibus.</p>
                </div>
            </div>
        </div>
    )
}