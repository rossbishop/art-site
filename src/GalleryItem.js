import React from 'react'

export default function GalleryItem(props) {

console.log(props);
    return (
        <div className={((props.selected)==(props.id-1)) ? "carousel-item active" : "carousel-item"}> {/* FIND OUT HOW TO INSERT PROPS WHERE THERE ARE SPEECH MARKS */}
            <img className="gallery-img" src={require("./img/destination_tokyo.jpg")} alt="..."/>
            <div className="container">
                <div className="carousel-caption">
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}