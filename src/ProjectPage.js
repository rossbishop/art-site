import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'

import './css/projectpage.css';

function ProjectPage() {

    const [projectState, updateProject] = useState({projectData: projectDataImport});                                               /* Store all page data in this state */

    const [currentProjectState, updateCurrentProject] = useState({currentDataInt: projectState.projectData.length - 1})             /* Set this to the highest id in the json */

    const [galleryState, updateGallery] = useState({galleryData: projectState.projectData[currentProjectState.currentDataInt]});    /* Store the whole current revision in here as gallery is top level */
    const [commentState, updateComments] = useState({commentData: galleryState.galleryData.comments});                              /* Store just the comment here */
    
    const projectCallback = useCallback((newId) => {
            updateCurrentProject({currentDataInt: newId});
            updateGallery({galleryData: projectState.projectData[currentProjectState.currentDataInt]});
            updateComments({commentData: galleryState.galleryData.comments});
        },
        [currentProjectState],
    );

    console.log(projectState.projectData.length);

/*    const commentCallback = useCallback(() => {
            updateComments();
        },
        [],
    ); */

    console.log("Current Project State: " + currentProjectState.currentDataInt);

    return (
        <>
            <Header />
            <Gallery 
                projectCallback={projectCallback}
            />
            <Comments 
                commentArray={commentState.commentData}
            />
            <Footer />
        </>
    )
}

export default ProjectPage
