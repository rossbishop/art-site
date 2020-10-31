import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback, useEffect} from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'
import { propStyle } from 'aws-amplify-react';
import { withRouter } from 'react-router-dom'

function ProjectPage(props) {

    const [projectData, setProjectData] = useState(false)
    const [comment, setComment] = useState()
    const [revisionImages, setRevisionImages] = useState()
    const [revisionImageKey, setRevisionImageKey] = useState()
    const [publicImage, setPublicImage] = useState()

    const getRevisionImages = async() => {
        var revisionKeys;
        for(var i = 0; i < projectData.revisions.items.length; i++){
            revisionKeys[i] = projectData.revisions.items[i].imgFile.key;
        }

        try {
            const signedURL = await Storage.get(revisionImageKey, {level: 'public'})
            //setRevisionImageURL(signedURL)
        }
        catch (error) {
            console.log("Error getting project image: " + error)
        }
    }

    // const getArbitraryImage = async () => {
    //     const URL = await Storage.get("788cef31-2791-445f-a348-51608cf8103a.png")
    //     setPublicImage(URL)
    // }


    const getProject = async () => {
        try {
            const uuid = await (window.location.pathname.split('/'))[2]
            console.log(uuid)
            const apiCall = await API.graphql({query: queries.getProject, variables: {id: uuid}})
            console.log(apiCall)
            setProjectData(apiCall.data.getProject)
        }
        catch (error) {
            console.log('Error getting project: ', error)
        }
        finally {
    
        }
    }

    useEffect(() => {
        getProject()
    }, [])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
            />
            {projectData && (                
                <ProjectModule 
                    userDetails={props.userDetails}
                    isLoggedIn={props.isLoggedIn}
                    initialProjectDataState={(projectData.revisions.items.length)-1}
                    projectRevisionData={projectData.revisions.items}
                    projectDetails={projectData}
                    setComment={setComment}
                    comment={comment}
                    setLoading={props.setLoading}
                    setDestinationPage={props.setDestinationPage}
                />
                )
            }
            <Footer />
        </>
    )
}

export default withRouter(ProjectPage)
