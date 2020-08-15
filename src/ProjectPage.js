import {Header, Gallery, Comments, Footer} from './Imports.js'
import React, { useState } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'

import './css/projectpage.css';

function ProjectPage() {

    const [projectState, updateProject] = useState({projectData: projectDataImport})                                                /* Store all page data in this state */

    const [currentProjectState, updateCurrentProject] = useState({currentDataInt: projectState.projectData.length - 1})             /* Set this to the highest id in the json */

    const [galleryState, updateGallery] = useState({galleryData: projectState.projectData[currentProjectState.currentDataInt]});    /* Store the whole current revision in here as gallery is top level */
    const [commentState, updateComments] = useState([galleryState.galleryData.comments]);                                           /* Store just the comment here */

    return (
        <>
            <Header />
            <Gallery />
            <Comments 
                commentArray={commentState}
            />
            <Footer />
        </>
    )
}

export default ProjectPage
