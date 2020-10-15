import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useEffect, useState } from 'react';
import NewRevision from './NewRevision'
import UserData from './UserDummyData' 
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'

function NewRevisionPage(props) {

    const [revisionName, setRevisionName] = useState('')
    const [revisionDescription, setRevisionDescription] = useState('')
    const [projectID, setProjectID] = useState()
    const [revisionSuccess, setRevisionSuccess] = useState({isSuccess: false, message: ""})
    const [revisionError, setRevisionError] = useState({isError: false, message: ""})

    function getRedirectPage() {
        window.location.href=`/project/${projectID}`
    }

    useEffect(() => {
        setProjectID(window.location.pathname.split('/')[2])
    }, [])

    const createNewRevision = async () => {
        try {
            const revisionData = {
                projectID: projectID,
                imgSrc: "https://i.imgur.com/BlbUQz7.jpg",
                name: revisionName,
                description: revisionDescription,
            }
            const revisionCall = await API.graphql({query: mutations.createRevision, variables: {input: revisionData}})
            console.log('Success creating revision: ', revisionCall)
            setRevisionSuccess({isSuccess: true, message: "Success!"})
            setTimeout(() => {getRedirectPage();}, 3000);
        }
        catch (error) {
            console.log('Error creating revision: ', error)
            setRevisionError({isError: true, message: error})
        }
    }

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
            />
            {projectID &&
                <NewRevision 
                    userData={UserData[0]}
                    createNewRevision={createNewRevision}
                    setRevisionName={setRevisionName}
                    setRevisionDescription={setRevisionDescription}
                    revisionName={revisionName}
                    revisionDescription={revisionDescription}
                    revisionSuccess={revisionSuccess}
                    revisionError={revisionError}
                />
            }
            <Footer /> 
        </>
    )
}

export default NewRevisionPage