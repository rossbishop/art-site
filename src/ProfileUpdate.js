import React from 'react'

export default function ProfileUpdate(props) {

    return (
        <div className="container">
            <form class="form-signin">
                <h1 className="h3 mb-3 mt-4 font-weight-normal">Update Profile Details</h1>
                    <label for="inputEmail" className="sr-only">Current Username</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter new username" defaultValue="Current Username" required autofocus/>
                    <label for="inputEmail" className="sr-only">Current Position Title</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter new position title" defaultValue="Current Position Title" required autofocus/>
                    <label for="inputEmail" className="sr-only">Current Employer</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter new employer" defaultValue="Current Employer" required autofocus/>
                    <textarea class="form-control comment-box" id="commentFormTextArea1" rows="5">Current Bio</textarea>
                    <button className="btn btn-lg btn-primary btn-profileupdate btn-block mt-4" type="submit">Update Profile</button>
            </form>
            <form class="form-signin">
                <h2 className="h3 mb-3 mt-5 font-weight-normal">Update Social Media</h2>
                    <label for="inputEmail" className="sr-only">Instagram</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter Instagram Handle" defaultValue="Current Instagram Handle" required/>
                    <label for="inputEmail" className="sr-only">Twitter</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter Twitter Handle" defaultValue="Current Twitter Handle" required/>
                    <label for="inputEmail" className="sr-only">Facebook</label>
                    <input type="email" id="inputEmail" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter Facebook Handle" defaultValue="Current Facebook Handle" required/>
                    <button className="btn btn-lg btn-primary btn-profileupdate btn-block mt-4" type="submit">Update Social Media</button>
            </form>
            <form class="form-signin">
                <h2 className="h3 mb-3 mt-5 font-weight-normal">Update Password</h2>
                    <label for="inputPassword" className="sr-only">Current Password</label>
                    <input type="password" id="inputPassword" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter Current Password" required/>
                    <label for="inputPassword" className="sr-only">New Password</label>
                    <input type="password" id="inputPassword" className="form-control my-4 py-2 pl-0 my-2" placeholder="Enter New Password" required/>
                    <label for="inputPassword" className="sr-only">Password Confirmation</label>
                    <input type="password" id="inputPassword" className="form-control my-4 py-2 pl-0 my-2" placeholder="Confirm New Password" required/>
                    <button className="btn btn-lg btn-primary btn-profileupdate btn-block mt-4" type="submit">Update Password</button>
            </form>
            
        </div>
    )
}
