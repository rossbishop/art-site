import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import UserBanner from './UserBanner'
import ProjectGrid from './ProjectGrid'
import UserData from './UserDummyData'

function UserPage(props) {

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
            />
            <UserBanner 
                userData={UserData[0]}
            />
            <ProjectGrid />
            <Footer />
        </>
    )
}

export default UserPage
