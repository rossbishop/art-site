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
                        <div className="row d-flex align-items-center">
                            <div className="d-flex flex-column col-4">
                                <h6>Current Image:</h6>
                                <img className={ProfileUpdateStyles.profileImgSmall} src={props.userData.profilepicsrc} />
                            </div>
                            <div className="d-flex flex-column col-8">
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-column col-6">
                                        <input type="userDetail" id="inputUsername" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Local Path" defaultValue="" required autofocus/>
                                        <button type="button" className={cx('btn', 'btn-secondary', ProfileUpdateStyles.imgButton)}>Choose</button>
                                    </div>
                                    <div className="d-flex flex-column col-6">
                                        <input type="userDetail" id="inputUsername" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Web Path" defaultValue="" required autofocus/>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-center">
                                    <button type="button" className={cx('btn', 'btn-info', ProfileUpdateStyles.imgButton)}>Save</button>
                                </div>
                            </div>
                        </div>
                        <h6 className="mt-3">Change Username:</h6>
                        <label for="inputUsername" className="sr-only">Current Username</label>
                        <input type="userDetail" id="inputUsername" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new username" defaultValue={props.userData.username} required autofocus/>
                        <h6>Change Position:</h6>
                        <label for="inputPosition" className="sr-only">Current Position Title</label>
                        <input type="userDetail" id="inputPosition" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new position title" defaultValue={props.userData.jobrole} required autofocus/>
                        <h6>Change Bio:</h6>
                        <textarea className={cx(ProfileUpdateStyles.formControl, ProfileUpdateStyles.bioBox)} id="bioTextArea" rows="5">{props.userData.description}</textarea>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Profile</button>
                    </form>
                </div>
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Social Media</h2>
                        <h6 className="mt-3">Change Instagram Handle:</h6>
                        <label for="inputInstagram" className="sr-only">Instagram</label>
                        <input type="userDetail" id="inputInstagram" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Instagram Handle" defaultValue="Current Instagram Handle" required/>
                        <h6>Change Twitter Handle:</h6>
                        <label for="inputTwitter" className="sr-only">Twitter</label>
                        <input type="userDetail" id="inputTwitter" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Twitter Handle" defaultValue="Current Twitter Handle" required/>
                        <h6>Change Facebook Handle:</h6>
                        <label for="inputFacebook" className="sr-only">Facebook</label>
                        <input type="userDetail" id="inputFacebook" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Facebook Handle" defaultValue="Current Facebook Handle" required/>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Social Media</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Password</h2>
                        <label for="inputCurrentPassword" className="sr-only">Current Password</label>
                        <input type="password" id="inputCurrentPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Enter Current Password" required/>
                        <label for="inputNewPassword" className="sr-only">New Password</label>
                        <input type="password" id="inputNewPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Enter New Password" required/>
                        <label for="inputConfirmPassword" className="sr-only">Password Confirmation</label>
                        <input type="password" id="inputConfirmPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Confirm New Password" required/>
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
