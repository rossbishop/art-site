import {Header, ProjectGrid, Footer} from './Imports.js'
import React from 'react';
import NewRevision from './NewRevision'
import UserData from './UserDummyData' 

function NewRevisionPage() {
    return (
        <>
            <Header />
            <NewRevision 
                userData={UserData[0]}
            />
            <Footer /> 
        </>
    )
}

export default NewRevisionPage