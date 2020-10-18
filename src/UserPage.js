import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback, useEffect } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'
import UserBanner from './UserBanner'
import ProjectGrid from './ProjectGrid'
import UserData from './UserDummyData'

function UserPage(props) {

    const [projectData, setProjectData] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    const getUserProjects = async () => {
        try {
            const owner = (window.location.pathname.split('/'))[2]
            const apiCall = await API.graphql({query: queries.projectByOwnerByDate, variables: {owner: owner, limit: 20, sortDirection: "DESC"}})
            console.log(apiCall)
            setProjectData(apiCall.data.projectByOwnerByDate.items)
        }
        catch (error) {
            console.log('Error getting project: ', error)
        }
    }
    
    useEffect(() => {
        getUserProjects()
    }, [])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
            />
            <UserBanner 
                userData={UserData[0]}
            />
            {projectData &&
                <ProjectGrid 
                    projectData={projectData}
                />
            }
            <Footer />
        </>
    )
}

export default UserPage
