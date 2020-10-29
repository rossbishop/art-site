import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import galleryItemStyles from './css/galleryitem.module.css'
import './css/carousel.css'
import { AmplifyS3Image } from '@aws-amplify/ui-react';

export default function GalleryItem(props) {

    useEffect(() => {
        
        if((document.querySelector('amplify-s3-image')) != null)
        {
            console.log("AMPLIFY IMAGE EXISTS!!!!")
            let s3Image = document.querySelector('amplify-s3-image')
            console.log("S3 IMAGE: ")
            console.log(s3Image)
            setTimeout(() => {
                let shadowRootStyles = s3Image.shadowRoot.adoptedStyleSheets
                shadowRootStyles[0].replace("img {max-width: max-content; margin: auto; width: 100%; height: auto; display: block;}", 1)
            }, [250])
        }
        else
        {
            console.log("AMPLIFY IMAGE DOESN'T EXIST!!!")
        }
    })

    return (
        <div className={((props.selected)==(props.id-1)) ? "carousel-item active" : "carousel-item"}>
            {/* <img className={galleryItemStyles.galleryImg} src={props.imgSrc} alt="..."/> */}
            <AmplifyS3Image imgKey={props.imgKey}/>
            <div className="container">
                <div className="carousel-caption">
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}