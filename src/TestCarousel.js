import React, {useState} from 'react' 
import Carousel from 'react-bootstrap/Carousel'
import GalleryListItem from './GalleryListItem'
import CarouselItemNew from './CarouselItemNew'

export default function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
            <Carousel id="galleryCarousel" activeIndex={index} onSelect={handleSelect} controls={true} interval={null} indicators={false}>
                <ol className="carousel-indicators">
                    <li data-target="#galleryCarousel" data-slide-to="1" className="active"></li>
                    <li data-target="#galleryCarousel" data-slide-to="2"></li>
                    <li data-target="#galleryCarousel" data-slide-to="3"></li>
                </ol>

                {/*<ol className="carousel-indicators">
                    {
                        props.projectData.slice().reverse().map(item => {
                            return (
                                <GalleryListItem
                                    id={item.id}
                                    isLatest={props.projectData.length}
                                    selected={props.currentId}
                                    projectUpdateState={props.projectUpdateState}
                                />
                            )
                        })
                    }
                </ol>*/}

                {/*
                    props.projectData.map(item => {
                        return (
                            <CarouselItemNew
                                id={(item.id)+1}
                                isLatest={props.projectData.length}
                                selected={props.currentId}
                                imgSrc={item.imgSrc}
                                name={item.name}
                                description={item.description}
                            />
                        )
                    })
                */}  


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./img/destination_tokyo.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./img/destination_tokyo.jpg")}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./img/destination_tokyo.jpg")}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );

}
