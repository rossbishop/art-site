import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import ProfileUpdate from './ProfileUpdate'
import UserData from './UserDummyData'

import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'

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

    const [socialSuccess, setSocialSuccess] = useState({isSuccess: false, message: ""})
    const [socialError, setSocialError] = useState({isError: false, message: ""})

    const [profileSuccess, setProfileSuccess] = useState({isSuccess: false, message: ""})
    const [profileError, setProfileError] = useState({isError: false, message: ""})

    const [passwordSuccess, setPasswordSuccess] = useState({isSuccess: false, message: ""})
    const [passwordError, setPasswordError] = useState({isError: false, message: ""})


    const updateSocial = async() => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            const publicDetails = {publicUserProfileId: user.attributes.sub, facebook: facebook, instagram: instagram, twitter: twitter}
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
            const publicDetails = {publicUserProfileId: user.attributes.sub, username: username, position: job, location: location, bio: bio}
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

    return (
        <>
            {}
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}  
                userAttribs={props.userAttribs}          
            />
            <ProfileUpdate
                userDetails={props.userDetails}
                userAttribs={props.userAttribs}
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
            />
            <Footer /> 
        </>
    )
}

export default ProfileUpdatePage