import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Storage } from 'aws-amplify';

export default function AmplifyImage(props) {

    const [imageURL, setImageURL] = useState()

    const getImageURL = async() => {
        try {
            const signedURL = await Storage.get(props.imgKey, {level: 'public'})
            setImageURL(signedURL)
        }
        catch (error) {
            console.log("Error getting image: " + error)
        }        
    }

    useEffect(() => {
        getImageURL()
    }, [])

    return (
        <>
            {imageURL && (
                    <img className={props.style} src={imageURL}/>
                ) 
            }
        </>    
    )
}