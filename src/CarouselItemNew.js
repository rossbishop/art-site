import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselItemNew(props) {

    return (
        <Carousel.Item>
            <img
                className="gallery-img"
                src={require("./img/destination_tokyo.jpg")}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>{props.name}</h5>
                <p>{props.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}