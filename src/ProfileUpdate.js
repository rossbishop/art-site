import React, { useEffect, useState } from 'react'

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
                        <input type="userDetail" id="inputUsername" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new username" onChange={event => props.setUsername(event.target.value)} defaultValue={props.userAttribs.preferred_username} required autofocus/>
                        <h6>Change Position:</h6>
                        <label for="inputPosition" className="sr-only">Current Position Title</label>
                        <input type="userDetail" id="inputPosition" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new position title" onChange={event => props.setJob(event.target.value)} defaultValue={props.publicUserAttribs.position} required autofocus/>
                        <h6>Change Location:</h6>
                        <label for="inputLocation" className="sr-only">Current Location</label>
                        <input type="userDetail" id="inputLocation" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new location" onChange={event => props.setLocation(event.target.value)} defaultValue={props.publicUserAttribs.location} required autofocus/>
                        <h6>Change Bio:</h6>
                        <textarea className={cx(ProfileUpdateStyles.formControl, ProfileUpdateStyles.bioBox)} id="bioTextArea" rows="5" onChange={event => props.setBio(event.target.value)}>{props.publicUserAttribs.bio}</textarea>
                        {props.profileSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">Updated profile details successfully</div>
                        )
                        }
                        {props.profileError.isError && (
                            <div className="alert alert-danger" role="alert">{props.profileError.message}</div>)
                        }
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} onClick={(e) => {e.preventDefault();props.updateProfile();}} type="submit">Update Profile</button>
                    </form>
                </div>
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Social Media</h2>
                        <h6 className="mt-3">Change Instagram Handle:</h6>
                        <label for="inputInstagram" className="sr-only">Instagram</label>
                        <input type="userDetail" id="inputInstagram" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Instagram Handle" onChange={event => props.setInstagram(event.target.value)} defaultValue={props.publicUserAttribs.instagram} required/>
                        <h6>Change Twitter Handle:</h6>
                        <label for="inputTwitter" className="sr-only">Twitter</label>
                        <input type="userDetail" id="inputTwitter" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Twitter Handle" onChange={event => props.setTwitter(event.target.value)} defaultValue={props.publicUserAttribs.twitter} required/>
                        <h6>Change Facebook Handle:</h6>
                        <label for="inputFacebook" className="sr-only">Facebook</label>
                        <input type="userDetail" id="inputFacebook" className={cx(ProfileUpdateStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Facebook Handle" onChange={event => props.setFacebook(event.target.value)} defaultValue={props.publicUserAttribs.facebook} required/>
                        {props.socialSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">Updated social details successfully</div>
                        )
                        }
                        {props.socialError.isError && (
                            <div className="alert alert-danger" role="alert">{props.socialError.message}</div>)
                        }
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} onClick={(e) => {e.preventDefault();props.updateSocial();}} type="submit">Update Social Media</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <form className={ProfileUpdateStyles.formProfileUpdate}>
                        <h2 className="h3 mb-3 mt-4 font-weight-normal">Update Password</h2>
                        <label for="inputCurrentPassword" className="sr-only">Current Password</label>
                        <input type="password" id="inputCurrentPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Enter Current Password" onChange={event => props.setCurrPassword(event.target.value)} required/>
                        <label for="inputNewPassword" className="sr-only">New Password</label>
                        <input type="password" id="inputNewPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Enter New Password" onChange={event => props.setNewPassword(event.target.value)} required/>
                        <label for="inputConfirmPassword" className="sr-only">Password Confirmation</label>
                        <input type="password" id="inputConfirmPassword" className={cx(ProfileUpdateStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Confirm New Password" required/>
                        {props.passwordSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">Updated password successfully</div>
                        )
                        }
                        {props.passwordError.isError && (
                            <div className="alert alert-danger" role="alert">{props.passwordError.message}</div>)
                        }
                        <button className={cx(ProfileUpdateStyles.btnProfileUpdate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} onClick={(e) => {e.preventDefault();props.updatePassword();}} type="submit">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
