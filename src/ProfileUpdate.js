import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import ProfileUpdateStyles from './css/profileupdate.module.css'
import cx from 'classnames'

export default function ProfileUpdate(props) {

    return (
        <div className="container">
            <div class="row">
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Update Profile Details</h1>
                        <label for="inputUsername" className="sr-only">Current Username</label>
                        <input type="userDetail" id="inputUsername" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter new username" defaultValue="Current Username" required autofocus/>
                        <label for="inputPosition" className="sr-only">Current Position Title</label>
                        <input type="userDetail" id="inputPosition" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter new position title" defaultValue="Current Position Title" required autofocus/>
                        <label for="inputEmployer" className="sr-only">Current Employer</label>
                        <input type="userDetail" id="inputEmployer" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter new employer" defaultValue="Current Employer" required autofocus/>
                        <textarea className={cx(ProfileUpdateStyles.formControl, ProfileUpdateStyles.bioBox)} id="bioTextArea" rows="5">Current Bio</textarea>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Profile</button>
                    </form>
                </div>
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Social Media</h2>
                        <label for="inputInstagram" className="sr-only">Instagram</label>
                        <input type="userDetail" id="inputInstagram" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter Instagram Handle" defaultValue="Current Instagram Handle" required/>
                        <label for="inputTwitter" className="sr-only">Twitter</label>
                        <input type="userDetail" id="inputTwitter" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter Twitter Handle" defaultValue="Current Twitter Handle" required/>
                        <label for="inputFacebook" className="sr-only">Facebook</label>
                        <input type="userDetail" id="inputFacebook" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter Facebook Handle" defaultValue="Current Facebook Handle" required/>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Social Media</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Password</h2>
                        <label for="inputCurrentPassword" className="sr-only">Current Password</label>
                        <input type="password" id="inputCurrentPassword" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter Current Password" required/>
                        <label for="inputNewPassword" className="sr-only">New Password</label>
                        <input type="password" id="inputNewPassword" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Enter New Password" required/>
                        <label for="inputConfirmPassword" className="sr-only">Password Confirmation</label>
                        <input type="password" id="inputConfirmPassword" className={cx(ProfileUpdateStyles.formControl,"my-4", "py-2", "pl-0", "my-2")} placeholder="Confirm New Password" required/>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
