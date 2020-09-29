import {Header, Footer} from './Imports.js'
import React from 'react';
import Loading from './Loading'

function LoadingPage(props) {

    return (
        <>
            <Header />
            <Loading />
            <Footer /> 
        </>
    )
}

export default LoadingPage