import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'

import './css/projectpage.css';

function ProjectPage() {

    return (
        <>
            <Header />
            <ProjectModule 
                initialProjectDataState={(projectDataImport.length)-1}
                projectData={projectDataImport}
            />
            <Footer />
        </>
    )
}

export default ProjectPage
