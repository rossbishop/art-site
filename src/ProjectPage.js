import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback, useEffect} from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'

var projectDataVar = undefined
var isResponded = false

function ProjectPage() {

    const [projectData, setProjectData] = useState(null)

    const getProject = async () => {
        try {
            const apiCall = await API.graphql({query: queries.getProject, variables: {id: "431123e4-9658-4385-9d23-2b26a19e9d5d"}})
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
                initialProjectDataState={0}
                projectRevisionData={projectData.revisions.items}
                projectDetails={projectData}
                />
            }
            <Footer />
        </>
    )
}

export default ProjectPage
