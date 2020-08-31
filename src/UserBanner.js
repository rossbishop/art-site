import React from 'react'
import UserSocialIcon from './UserSocialIcon'

import 'bootstrap/dist/css/bootstrap.css'
import userBannerStyles from './css/userbanner.module.css'
import cx from 'classnames'

export default function UserBanner(props) {

    return (
        <section className={userBannerStyles.jumbotron}>
            <div className={userBannerStyles.blurProfileBg}>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4 pr-3">
                                    <img className={userBannerStyles.profileImg} src={props.userData[0].profilepicsrc} />
                                </div>
                                <div className="col-8">
                                    <h1>{props.userData[0].username}</h1>
                                    <h6>{props.userData[0].jobrole}</h6>
                                    <h6>{props.userData[0].location}</h6>
                                    <p>{props.userData[0].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex align-items-end flex-column">
                            {
                                props.userData[0].social.map(item => {
                                return (
                                            <UserSocialIcon
                                                socialtype={item.type}
                                                username={item.username}
                                            />
                                        )
                                    }
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}