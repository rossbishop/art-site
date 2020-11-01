import { Header, ProjectGrid, Footer } from './Imports.js'
import React, { useState, useEffect } from 'react';
import NewProject from './NewProject'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import * as mutations from './graphql/mutations'
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import awsconfig from './aws-exports';

function NewProjectPage(props) {

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [revisionName, setRevName] = useState('')
    const [revisionDescription, setRevDescription] = useState('')
    const [createdProject, setCreatedProject] = useState()
    const [projectSuccess, setProjectSuccess] = useState({isSuccess: false, message: ""})
    const [projectError, setProjectError] = useState({isError: false, message: ""})
    const [revisionImageKey, setRevisionImageKey] = useState()
    const [revisionImageURL, setRevisionImageURL] = useState()
    const [revisionFile, setRevisionFile] = useState()
    const [shouldRedirect, setRedirect] = useState(false)

    const getNewProjectImage = async() => {
        try {
            const signedURL = await Storage.get(revisionImageKey, {level: 'public'})
            setRevisionImageURL(signedURL)
        }
        catch (error) {
            console.log("Error getting project image: " + error)
        }
    }

    const uploadNewProjectImage = async(inputFile) => {
        console.log("Start Image Upload")
        //const file = e.target.files[0];
        const file = inputFile;
        const imageuuid = uuidv4();
        try {
            let result = await Storage.put(`${imageuuid}.png`, file, {
                level: 'public',
                contentType: 'image/png',
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
                }
            });
            console.log(result)
            setRevisionImageKey(result.key)
        }
        catch (error) {
            console.log(error)
        }
        // finally {
        //     console.log(result)
        // }
    }

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
        }
        catch (error) {
            console.log('Error creating project: ', error)
            setProjectError({isError: true, message: error})
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
                contentType: "revision",
                imgFile: {
                    bucket: awsconfig.aws_user_files_s3_bucket,
                    key: revisionImageKey,
                    region: awsconfig.aws_user_files_s3_bucket_region
                }
            }
            const revisionCall = await API.graphql({query: mutations.createRevision, variables: {input: revisionData}})
            setProjectSuccess({isSuccess: true, message: "Success!"})
            console.log('Success creating revision: ', revisionCall)
        }
        catch (error) {
            console.log('Error creating revision: ', error)
            setProjectError({isError: true, message: error})
        }
        finally {
            setTimeout(() => {setRedirect(true);}, 3000);
        }
    }

    useEffect(() => {
        if(createdProject != undefined)
        {
            createNewRevision()
        }

        if(revisionImageKey != undefined)
        {
            getNewProjectImage()
        }
    }, [createdProject, revisionImageKey])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                               
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
                    uploadNewProjectImage={uploadNewProjectImage}
                    revisionImageKey={revisionImageKey}
                    revisionFile={revisionFile}
                    setRevisionFile={setRevisionFile}
                    revisionImageURL={revisionImageURL}
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