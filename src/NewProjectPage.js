import { Header, ProjectGrid, Footer } from './Imports.js'
import React, { useState } from 'react';
import NewProject from './NewProject'
import { API, graphqlOperation } from 'aws-amplify'
//import { createProject } from './graphql/mutations'
import * as mutations from './graphql/mutations'

function NewProjectPage() {

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [revisionDescription, setRevDescription] = useState('')

    return (
        <>
            <Header />
            <NewProject 
                projectName={projectName}
                projectDescription={projectDescription}
                revisionDescription={revisionDescription}
                setProjectName={setProjectName}
                setProjectDescription={setProjectDescription}
                setRevDescription={setRevDescription}
                createNewProject={createNewProject}
            />
            <Footer /> 
        </>
    )
}

const createNewProject = async (projectName, projectDescription) => {

    console.log('!!!!!!!!Project Name: ', projectName)
    console.log('!!!!!!!!Project Description: ', projectDescription)

    const projectData = {
        userID: '1',
        projectName: projectName,
        projectDescription: projectDescription,
    }

    //await API.graphql(graphqlOperation(createProject, projectData))
    await API.graphql({query: mutations.createProject, variables: {input: projectData}})
    .then((response) => {
        console.log('Success: ', response)
    })
    .catch((error) => {
        console.log('Error creating project: ', error)
    })
}

export default NewProjectPage