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
                                    <img className={userBannerStyles.profileImg} src={props.userData.profilepicsrc} />
                                </div>
                                <div className="col-8">
                                    <h1>{props.profileData.username}</h1>
                                    <h6>{props.profileData.position}</h6>
                                    <h6>{props.profileData.location}</h6>
                                    <p>{props.profileData.bio}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex align-items-end flex-column">
                            {props.profileData.instagram &&
                                <UserSocialIcon
                                    socialtype="instagram"
                                    username={props.profileData.instagram}
                                />
                            }
                            {props.profileData.facebook &&
                                <UserSocialIcon
                                    socialtype="facebook"
                                    username={props.profileData.facebook}
                                />
                            }
                            {props.profileData.twitter &&
                                <UserSocialIcon
                                    socialtype="twitter"
                                    username={props.profileData.twitter}
                                />
                            }
                            {/* {
                                props.userData.social.map(item => {
                                return (
                                            <UserSocialIcon
                                                socialtype={item.type}
                                                username={item.username}
                                            />
                                        )
                                    }
                                )
                            } */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}