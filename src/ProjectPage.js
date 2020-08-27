import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'

function ProjectPage() {

    return (
        <>
            <Header />
            <ProjectModule 
                initialProjectDataState={(projectDataImport.length)-1}
                projectRevisionData={projectDataImport[0].revisions}
                projectDetails={projectDataImport[0]}
            />
            <Footer />
        </>
    )
}

export default ProjectPage
