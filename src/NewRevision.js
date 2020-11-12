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
                                {props.revisionImageURL && (
                                    <img className={NewProjectStyles.profileImgSmall} src={props.revisionImageURL} />
                                )}                                
                            </div>
                            <div className="d-flex flex-column col-12">
                                <input type="userDetail" type="file" accept="image/png" onChange={event => props.setRevisionFile(event.target.files[0])} id="inputFile" className={cx(NewProjectStyles.formControl,"my-3", "py-2", "pl-0")} placeholder="Local Path" defaultValue="" required autofocus/>
                                <button type="button" className={cx('btn', 'btn-info', NewProjectStyles.imgButton)} onClick={(e) => {e.preventDefault();props.uploadNewRevisionImage(props.revisionFile);}}>Upload</button>
                            </div>
                        </div>
                        <h4 className="mt-3">New Revision Name</h4>
                        <label for="inputProjectName" className="sr-only">Enter New Project Name</label>
                        <input type="projectDetail" id="inputProjectName" className={cx(NewProjectStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter new revision name" onChange={event => props.setRevisionName(event.target.value)} required autofocus/>
                        <h4>New Revision Description:</h4>
                        <textarea className={cx(NewProjectStyles.formControl, NewProjectStyles.revDescBox)} id="bioTextArea" rows="5" placeholder="Enter a concise description for your new revision" onChange={event => props.setRevisionDescription(event.target.value)}></textarea>
                        {props.revisionSuccess.isSuccess && (
                            <div className="alert alert-success" role="alert">Revision created successfully - redirecting to project...</div>
                        )
                        }
                        {props.revisionError.isError && (
                            <div className="alert alert-danger" role="alert">{props.revisionError.message}</div>)
                        }
                        <button className={cx(NewProjectStyles.btnProjectCreate, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit" onClick={(e) => {e.preventDefault();props.createNewRevision();}}>Create Revision</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
