import {Header, ProjectGrid, Footer} from './Imports.js'
import React, { useState } from 'react';
import ProfileUpdate from './ProfileUpdate'
import UserData from './UserDummyData'

import { Auth } from 'aws-amplify';



function ProfileUpdatePage(props) {

    const [username, setUsername] = useState(props.userAttribs["preferred_username"])
    const [job, setJob] = useState(props.userAttribs["custom:job"])
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
            let result = await Auth.updateUserAttributes(user, {
                'custom:instagram': instagram,
                'custom:facebook': facebook,
                'custom:twitter': twitter
            });
            console.log(result)
            setSocialSuccess({isSuccess: true, message: result})
        }
        catch(err) {
            console.log(err)
            setSocialError(err)
        }
    }

    const updateProfile = async() => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            let result = await Auth.updateUserAttributes(user, {
                'preferred_username': username,
                'custom:job': job,
                'custom:bio': bio
            });
            console.log(result)
            setProfileSuccess({isSuccess: true, message: result})
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


    // const updatePassword = async() => {
    //     try {
    //         const curruser = await Auth.currentAuthenticatedUser()
    //         const changepass = await (user => {
    //             return Auth.changePassword(curruser, currPassword, newPassword);
    //         })
    //         console.log(changepass)
    //         setPasswordSuccess(changepass)
    //     }
    //     catch(err) {
    //         console.log(err)
    //         setPasswordError(err)
    //     }

    // }

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