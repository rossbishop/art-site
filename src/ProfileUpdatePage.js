import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState, useEffect } from 'react';
import ProfileUpdate from './ProfileUpdate'
import UserData from './UserDummyData'

import { Auth } from 'aws-amplify';
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid';
import * as mutations from './graphql/mutations'
import * as queries from './graphql/queries'
import awsconfig from './aws-exports'; 

function ProfileUpdatePage(props) {

    const [username, setUsername] = useState(props.userAttribs["preferred_username"])
    const [job, setJob] = useState(props.userAttribs["custom:job"])
    const [location, setLocation] = useState(props.userAttribs["custom:location"])
    const [bio, setBio] = useState(props.userAttribs["custom:bio"])

    const [instagram, setInstagram] = useState(props.userAttribs["custom:instagram"])
    const [facebook, setFacebook] = useState(props.userAttribs["custom:facebook"])
    const [twitter, setTwitter] = useState(props.userAttribs["custom:twitter"])

    const [currPassword, setCurrPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const [loadProfileSuccess, setLoadProfileSuccess] = useState({isSuccess: false, message: ""})
    const [loadProfileError, setLoadProfileError] = useState({isError: false, message: ""})
    const [loadProfileData, setLoadProfileData] = useState()

    const [socialSuccess, setSocialSuccess] = useState({isSuccess: false, message: ""})
    const [socialError, setSocialError] = useState({isError: false, message: ""})

    const [profileSuccess, setProfileSuccess] = useState({isSuccess: false, message: ""})
    const [profileError, setProfileError] = useState({isError: false, message: ""})

    const [passwordSuccess, setPasswordSuccess] = useState({isSuccess: false, message: ""})
    const [passwordError, setPasswordError] = useState({isError: false, message: ""})

    const [avatarImageKey, setAvatarImageKey] = useState()
    const [avatarImageURL, setAvatarImageURL] = useState()
    const [avatarFile, setAvatarFile] = useState()

    const [bannerImageKey, setBannerImageKey] = useState()
    const [bannerImageURL, setBannerImageURL] = useState()
    const [bannerFile, setBannerFile] = useState()

    const getUserProfileData = async () => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            const apiCall = await API.graphql({query: queries.publicUserProfileByUser, variables: {owner: props.userDetails.username}})
            console.log(apiCall)
            setLoadProfileSuccess({isSuccess: true, message: "Profile data loaded"})
            setLoadProfileData(apiCall.data.publicUserProfileByUser.items[0])
        }
        catch (error) {
            console.log('Error getting profile: ', error)
            setLoadProfileError({isError: true, message: error})
        }
    }

    const updateSocial = async() => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            const publicDetails = {id: user.attributes.sub, facebook: facebook, instagram: instagram, twitter: twitter}
            const publicProfileUpdate = await API.graphql({ query: mutations.updatePublicUserProfile, variables: {input: publicDetails}})
            setSocialSuccess({isSuccess: true, message: "Social details updated successfully"})
        }
        catch(err) {
            console.log(err)
            setSocialError(err)
        }
    }

    const updateProfile = async() => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            let cognitoUpdate = await Auth.updateUserAttributes(user, {
                'preferred_username': username
            });

            let avatarImgJson = ""
            let bannerImgJson = ""

            if(avatarImageKey != undefined)
            {
                avatarImgJson = {
                        bucket: awsconfig.aws_user_files_s3_bucket,
                        key: avatarImageKey,
                        region: awsconfig.aws_user_files_s3_bucket_region
                    }
            }

            if(bannerImageKey != undefined)
            {
                bannerImgJson = {
                        bucket: awsconfig.aws_user_files_s3_bucket,
                        key: bannerImageKey,
                        region: awsconfig.aws_user_files_s3_bucket_region
                    }
            }

            const publicDetails = {
                id: user.attributes.sub, 
                username: username, 
                position: job, 
                location: location, 
                bio: bio,
                avatarImgFile: ((avatarImgJson != "") ? avatarImgJson : loadProfileData.avatarImgFile ),
                bannerImgFile: ((bannerImgJson != "") ? bannerImgJson : loadProfileData.bannerImgFile )
            }

            // console.log(publicDetails)

            const publicProfileUpdate = await API.graphql({ query: mutations.updatePublicUserProfile, variables: {input: publicDetails}})
            setProfileSuccess({isSuccess: true, message: "Profile details updated successfully"})
        }
        catch(err) {
            console.log(err)
            setProfileError(err)
        }
    }

    function updatePassword() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                return Auth.changePassword(user, currPassword, newPassword);
            })
            .then(data => {console.log(data); setPasswordSuccess({isSuccess: true, message: data});})
            .catch(err => {console.log(err); setPasswordError({isSuccess: true, message: err});});
    }

    const uploadNewAvatarImage = async(inputFile) => {
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
            setAvatarImageKey(result.key)
        }
        catch (error) {
            console.log(error)
        }
    }

    const uploadNewBannerImage = async(inputFile) => {
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
            setBannerImageKey(result.key)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getNewAvatarImage = async() => {
        try {
            const signedURL = await Storage.get(avatarImageKey, {level: 'public'})
            setAvatarImageURL(signedURL)
        }
        catch (error) {
            console.log("Error getting project image: " + error)
        }
    }

    const getNewBannerImage = async() => {
        try {
            const signedURL = await Storage.get(bannerImageKey, {level: 'public'})
            setBannerImageURL(signedURL)
        }
        catch (error) {
            console.log("Error getting project image: " + error)
        }
    }

    const loadExistingProfileImages = async() => {
        try {
            const signedAvatarURL = await Storage.get(loadProfileData.avatarImgFile.key, {level: 'public'})
            setAvatarImageURL(signedAvatarURL)
            const signedBannerURL = await Storage.get(loadProfileData.bannerImgFile.key, {level: 'public'})
            setBannerImageURL(signedBannerURL)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserProfileData()
    }, [])

    useEffect(() => {
        if(avatarImageKey != undefined)
        {
            getNewAvatarImage()
        }
        if(bannerImageKey != undefined)
        {
            getNewBannerImage()
        }
        if((loadProfileData != undefined) && ((avatarImageKey || bannerImageKey) == undefined))
        {
            loadExistingProfileImages()
        }
    }, [avatarImageKey, bannerImageKey, loadProfileData])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}  
                userAttribs={props.userAttribs}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}                             
            />
            {loadProfileData &&
                <ProfileUpdate
                    userDetails={props.userDetails}
                    userAttribs={props.userAttribs}
                    publicUserAttribs={loadProfileData}
                    userData={UserData[0]}
                    setInstagram={setInstagram}
                    setFacebook={setFacebook}
                    setTwitter={setTwitter}
                    setBio={setBio}
                    setJob={setJob}
                    setCurrPassword={setCurrPassword}
                    setNewPassword={setNewPassword}
                    setUsername={setUsername}
                    updateSocial={updateSocial}
                    updateProfile={updateProfile}
                    updatePassword={updatePassword}
                    setLocation={setLocation}
                    socialSuccess={socialSuccess}
                    socialError={socialError}
                    profileSuccess={profileSuccess}
                    profileError={profileError}
                    passwordSuccess={passwordSuccess}
                    passwordError={passwordError}
                    uploadNewAvatarImage={uploadNewAvatarImage}
                    avatarFile={avatarFile}
                    setAvatarFile={setAvatarFile}
                    avatarImageURL={avatarImageURL}
                    uploadNewBannerImage={uploadNewBannerImage}
                    bannerFile={bannerFile}
                    setBannerFile={setBannerFile}
                    bannerImageURL={bannerImageURL}
                />
            }
            <Footer /> 
        </>
    )
}

export default ProfileUpdatePage