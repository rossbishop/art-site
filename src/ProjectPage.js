import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'

import './css/projectpage.css';

function ProjectPage() {

    //const [projectState, updateProject] = useState({projectData: projectDataImport});                                               /* Store all page data in this state */

    //const [galleryState, updateGallery] = useState({galleryData: projectState.projectData[currentProjectState.currentDataInt]});    /* Store the whole current revision in here as gallery is top level */
    //const [commentState, updateComments] = useState({commentData: galleryState.galleryData.comments});                              /* Store just the comment here */

/*    const commentCallback = useCallback(() => {
            updateComments();
        },
        [],
    ); */

    return (
        <>
            <Header />
            <ProjectModule 
                //commentArray={commentState.commentData}
                initialProjectDataState={(projectDataImport.length)-1}
                projectData={projectDataImport}
            />
            {/* <Gallery 
                projectCallback={projectCallback}
            />
            <Comments 
                commentArray={commentState.commentData}
            /> */}
            <Footer />
        </>
    )
}

export default ProjectPage
