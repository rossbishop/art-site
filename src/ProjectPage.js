import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback, useEffect} from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'
import { propStyle } from 'aws-amplify-react';

function ProjectPage(props) {

    const [projectData, setProjectData] = useState(null)

    const getProject = async () => {
        try {
            const uuid = (window.location.pathname.split('/'))[2]
            const apiCall = await API.graphql({query: queries.getProject, variables: {id: uuid}})
            console.log(apiCall)
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
            <Header />
            {projectData &&
                <ProjectModule 
                initialProjectDataState={(projectData.revisions.items.length)-1}
                projectRevisionData={projectData.revisions.items}
                projectDetails={projectData}
                />
            }
            <Footer />
        </>
    )
}

export default ProjectPage
