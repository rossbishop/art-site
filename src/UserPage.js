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
    const [profileData, setProfileData] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    const getUserProjects = async () => {
        try {
            const owner = (window.location.pathname.split('/'))[2]
            const apiCall = await API.graphql({query: queries.projectsByUserByDate, variables: {owner: owner, limit: 20, sortDirection: "DESC"}})
            console.log(apiCall)
            setProjectData(apiCall.data.projectsByUserByDate.items)
        }
        catch (error) {
            console.log('Error getting project: ', error)
        }
    }
    
    const getUserProfileData = async () => {
        try {
            const owner = (window.location.pathname.split('/'))[2]
            const apiCall = await API.graphql({query: queries.publicUserProfileByUser, variables: {owner: owner}})
            console.log(apiCall)
            setProfileData(apiCall.data.publicUserProfileByUser.items[0])
        }
        catch (error) {
            console.log('Error getting profile: ', error)
        }
    }

    useEffect(() => {
        getUserProjects()
        getUserProfileData()
    }, [])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
            />
            {profileData &&
                <UserBanner 
                userData={UserData[0]}
                profileData={profileData}
                />
            }
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
