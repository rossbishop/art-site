import { Header, ProjectGrid, Footer } from './Imports.js'
import React, { useState, useEffect } from 'react';
import NewProject from './NewProject'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'

function NewProjectPage(props) {

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [revisionName, setRevName] = useState('')
    const [revisionDescription, setRevDescription] = useState('')
    const [createdProject, setCreatedProject] = useState()
    const [projectSuccess, setProjectSuccess] = useState({isSuccess: false, message: ""})
    const [projectError, setProjectError] = useState({isError: false, message: ""})

    const[redirectLoc, setRedirectLoc] = useState("")

    function getRedirectPage() {
        window.location.href=`/project/${createdProject.data.createProject.id}`
    }

    const createNewProject = async () => {
        try {
            const projectData = {
                projectName: projectName,
                projectDescription: projectDescription,
            }
        
            const projectCall = await API.graphql({query: mutations.createProject, variables: {input: projectData}})
            console.log('Success creating project: ', projectCall)
            setCreatedProject(projectCall)
            setProjectSuccess({isSuccess: true, message: "Success!"})
            //setTimeout(() => {getRedirectPage();}, 3000);
        }
        catch (error) {
            console.log('Error creating project: ', error)
            setProjectError({isError: true, message: error})
        }
        finally {
            setTimeout(() => {getRedirectPage();}, 3000);
        }
    }

    const createNewRevision = async () => {
        try {
            const revisionData = {
                projectID: createdProject.data.createProject.id,
                imgSrc: "https://i.imgur.com/BlbUQz7.jpg",
                name: revisionName,
                description: revisionDescription,
            }
            setRedirectLoc(`/project/${createdProject.data.createProject.id}`)
            const revisionCall = await API.graphql({query: mutations.createRevision, variables: {input: revisionData}})
            console.log('Success creating revision: ', revisionCall)
        }
        catch (error) {
            console.log('Error creating revision: ', error)
        }
    }

    useEffect(() => {
        if(createdProject != undefined)
        {
            createNewRevision()
        }
    }, [createdProject])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}            
            />
            <NewProject 
                projectName={projectName}
                projectDescription={projectDescription}
                revisionName={revisionName}
                revisionDescription={revisionDescription}
                projectSuccess={projectSuccess}
                projectError={projectError}
                setProjectName={setProjectName}
                setProjectDescription={setProjectDescription}
                setRevName={setRevName}
                setRevDescription={setRevDescription}
                createNewProject={createNewProject}
            />
            <Footer /> 
        </>
    )
}

export default NewProjectPage