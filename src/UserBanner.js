import React, { useEffect } from 'react'
import UserSocialIcon from './UserSocialIcon'

import 'bootstrap/dist/css/bootstrap.css'
import userBannerStyles from './css/userbanner.module.css'
import cx from 'classnames'

export default function UserBanner(props) {

    useEffect(() => {
        if(((document.getElementById('banner')) != null) && (props.bannerURL != null))
        {
            console.log("AMPLIFY IMAGE EXISTS!!!!")
            let banner = document.getElementById('banner')
            banner.style = "padding: 0; margin-bottom: 0; background-image: url(" + props.bannerURL + "); background-repeat: no-repeat; background-size: 100%; color: #fff;"
        }
        else
        {
            console.log("AMPLIFY IMAGE DOESN'T EXIST!!!")
        }
    },[props.bannerURL])

    return (
        <section id="banner">
            <div className={userBannerStyles.blurProfileBg}>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4 pr-3">
                                    <img className={userBannerStyles.profileImg} src={props.avatarURL} />
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}