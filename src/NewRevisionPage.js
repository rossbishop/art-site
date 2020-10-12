import {Header, ProjectGrid, Footer} from './Imports.js'
import React from 'react';
import NewRevision from './NewRevision'
import UserData from './UserDummyData' 

function NewRevisionPage(props) {
    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
            />
            <NewRevision 
                userData={UserData[0]}
            />
            <Footer /> 
        </>
    )
}

export default NewRevisionPage