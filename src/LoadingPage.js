import {Header, Footer} from './Imports.js'
import React from 'react';
import Loading from './Loading'

function LoadingPage(props) {

    return (
        <>
            <Header
                userAttribs={props.userAttribs} 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}            
            />
            <Loading />
            <Footer /> 
        </>
    )
}

export default LoadingPage