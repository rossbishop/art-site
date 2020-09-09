import {Header, ProjectGrid, Footer} from './Imports.js'
import React from 'react';
import ProfileUpdate from './ProfileUpdate'
import UserData from './UserDummyData'

function ProfileUpdatePage() {
    return (
        <>
            <Header />
            <ProfileUpdate 
                userData={UserData[0]}
            />
            <Footer /> 
        </>
    )
}

export default ProfileUpdatePage