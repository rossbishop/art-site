import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import UserBanner from './UserBanner'
import ProjectGrid from './ProjectGrid'
import UserData from './UserDummyData'

import './css/userpage.css';

function UserPage() {

    return (
        <>
            <Header />
            <UserBanner 
                userData={UserData}
            />
            <ProjectGrid />
            <Footer />
        </>
    )
}

export default UserPage
