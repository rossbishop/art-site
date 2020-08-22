import React from 'react'

export default function UserBanner(props) {

    return (
        <section className="jumbotron">
            <div className='blur-profile-bg'>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className='row'>
                                <div className='col-4 pr-3'>
                                    <img className="profile-img" src={props.userData[0].profilepicsrc} />
                                </div>
                                <div className='col-8'>
                                    <h1>{props.userData[0].username}</h1>
                                    <h6>{props.userData[0].jobrole}</h6>
                                    <h6>{props.userData[0].location}</h6>
                                    <p>{props.userData[0].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex align-items-end flex-column">
                            <div className="icon-container">
                                <div className="row">
                                    <p className="icon-tag">social tag 1</p>
                                    <a href="instagram.com">
                                        <img className="social-img" src="https://via.placeholder.com/48"/>
                                    </a>
                                </div>
                            </div>
                            <div className="icon-container">
                                <div className="row">
                                    <p className="icon-tag">social tag 2</p>
                                    <a href="instagram.com">
                                        <img className="social-img" src="https://via.placeholder.com/48"/>
                                    </a>
                                </div>
                            </div>
                            <div className="icon-container">
                                <div className="row">
                                    <p className="icon-tag">social tag 3</p>
                                    <a href="instagram.com">
                                        <img className="social-img" src="https://via.placeholder.com/48"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}