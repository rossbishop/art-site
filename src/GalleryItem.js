import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import galleryItemStyles from './css/galleryitem.module.css'
import './css/carousel.css'
import { AmplifyS3Image } from '@aws-amplify/ui-react';
import AmplifyImage from './AmplifyImage'

export default function GalleryItem(props) {

    return (
        <div className={((props.selected)==(props.id-1)) ? "carousel-item active" : "carousel-item"}>
            <AmplifyImage 
                imgKey={props.imgKey}
                style={galleryItemStyles.galleryImg}
            />
            <div className="container">
                <div className="carousel-caption">
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}