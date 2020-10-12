import {Header, ProjectGrid, Footer} from './Imports.js'
import React from 'react';
import ProfileUpdate from './ProfileUpdate'
import UserData from './UserDummyData'

import { Auth } from 'aws-amplify';

function checkLoggedIn() {
    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.log(err);
    });
}

function ProfileUpdatePage(props) {
    return (
        <>
            {}
            <Header 
                userDetails={props.userDetails}
                isLoggedIn={props.isLoggedIn}            
            />
            <ProfileUpdate 
                userData={UserData[0]}
            />
            <Footer /> 
        </>
    )
}

export default ProfileUpdatePage