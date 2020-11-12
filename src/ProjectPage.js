import React, { useState, useEffect } from 'react';

import { Header, Footer, ProjectModule } from './Imports.js'

import { API } from 'aws-amplify'
import * as queries from './graphql/queries'

import { withRouter } from 'react-router-dom'

function ProjectPage(props) {

    const [projectData, setProjectData] = useState(false)
    const [comment, setComment] = useState()

    const getProject = async () => {
        try {
            const uuid = await (window.location.pathname.split('/'))[2]
            const apiCall = await API.graphql({query: queries.getProject, variables: {id: uuid}})
            setProjectData(apiCall.data.getProject)
        }
        catch (error) {
            console.log('Error getting project: ', error)
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
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                   
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
