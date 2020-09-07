import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import NewProjectStyles from './css/newrevision.module.css'
import cx from 'classnames'

export default function NewRevision(props) {

    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <form className={NewProjectStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Create New Revision</h1>
                        <h4 className="mt-3">Upload Content Revision</h4>
                        <div className="row d-flex align-items-center">
                            <div className="d-flex flex-column col-4">
                                <h6>Uploaded Content:</h6>
                                <img className={NewProjectStyles.profileImgSmall} src="https://via.placeholder.com/150" />
                            </div>
                            <div className="d-flex flex-column col-12">
                                <input type="userDetail" id="inputUsername" className={cx(NewProjectStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Local Path" defaultValue="" required autofocus/>
                                <button type="button" className={cx('btn', 'btn-secondary', NewProjectStyles.imgButton)}>Choose</button>
                                <button type="button" className={cx('btn', 'btn-info', NewProjectStyles.imgButton)}>Upload</button>
                            </div>
                        </div>
                        <h4 className="mt-3">New Revision Name</h4>
                        <label for="inputProjectName" className="sr-only">Enter New Project Name</label>
                        <input type="projectDetail" id="inputProjectName" className={cx(NewProjectStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new revision name" required autofocus/>
                        <h4>New Revision Description:</h4>
                        <textarea className={cx(NewProjectStyles.formControl, NewProjectStyles.revDescBox)} id="bioTextArea" rows="5" placeholder="Enter a concise description for your new revision"></textarea>
                        <button className={cx(NewProjectStyles.btnProjectCreate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Create Revision</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
