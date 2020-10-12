import React from 'react';
import Header from './Header'
import ProjectGrid from './ProjectGrid'
import Footer from './Footer'

function Home(props) {
    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}            
            />
            <ProjectGrid />
            <Footer /> 
        </>
    )
}

export default Home
