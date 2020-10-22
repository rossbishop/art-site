import { Header, ProjectGrid, Footer } from './Imports.js'
import React, { useState, useEffect } from 'react';
import NewProject from './NewProject'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function NewProjectPage(props) {

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [revisionName, setRevName] = useState('')
    const [revisionDescription, setRevDescription] = useState('')
    const [createdProject, setCreatedProject] = useState()
    const [projectSuccess, setProjectSuccess] = useState({isSuccess: false, message: ""})
    const [projectError, setProjectError] = useState({isError: false, message: ""})
    const [shouldRedirect, setRedirect] = useState(false)

    const createNewProject = async () => {
        try {
            const projectData = {
                //projectId: uuidv4(),
                projectName: projectName,
                projectDescription: projectDescription,
                contentType: "project"
            }
        
            const projectCall = await API.graphql({query: mutations.createProject, variables: {input: projectData}})
            console.log('Success creating project: ', projectCall)
            setCreatedProject(projectCall)
            setProjectSuccess({isSuccess: true, message: "Success!"})
        }
        catch (error) {
            console.log('Error creating project: ', error)
            setProjectError({isError: true, message: error})
        }
        finally {
            setTimeout(() => {setRedirect(true);}, 3000);
        }
    }

    const createNewRevision = async () => {
        try {
            const revisionData = {
                //revisionId: uuidv4(),
                projectID: createdProject.data.createProject.id,
                imgSrc: "https://i.imgur.com/BlbUQz7.jpg",
                name: revisionName,
                description: revisionDescription,
            }
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
            {!shouldRedirect &&(
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
            )}
            {shouldRedirect &&(
                <Redirect
                to={{
                    pathname: `/project/${createdProject.data.createProject.id}`
                }}
                />
            )}
            <Footer /> 
        </>
    )
}

export default NewProjectPage