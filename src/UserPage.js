import {Header, Gallery, Comments, Footer, ProjectModule} from './Imports.js'
import React, { useState, useCallback, useEffect } from 'react';
import data from './RevisionDummyData'
import projectDataImport from './ProjectDummyData'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import * as queries from './graphql/queries'
import UserBanner from './UserBanner'
import ProjectGrid from './ProjectGrid'
import UserData from './UserDummyData'

function UserPage(props) {

    const [projectData, setProjectData] = useState(null)
    const [profileData, setProfileData] = useState(null)
    const [avatarURL, setAvatarURL] = useState()
    const [bannerURL, setBannerURL] = useState()
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

    const getProfileImages = async() => {
        try {
            const signedAvatarURL = await Storage.get(profileData.avatarImgFile.key, {level: 'public'})
            setAvatarURL(signedAvatarURL)
            const signedBannerURL = await Storage.get(profileData.bannerImgFile.key, {level: 'public'})
            setBannerURL(signedBannerURL)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserProjects()
        getUserProfileData()
    }, [])

    useEffect(() => {
        console.log("GETTING PROFILE IMAGES")
        if(profileData != undefined)
        {
            getProfileImages()
        }
    }, [profileData])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}
                userAttribs={props.userAttribs}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                   
            />
            {profileData &&
                <UserBanner 
                userData={UserData[0]}
                profileData={profileData}
                avatarURL={avatarURL}
                bannerURL={bannerURL}
                />
            }
            {projectData &&
                <ProjectGrid 
                    projectData={projectData}
                    setLoading={props.setLoading}
                    setDestinationPage={props.setDestinationPage}
                />
            }
            <Footer />
        </>
    )
}

export default UserPage
