import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import userSocialIconStyles from './css/usersocialicon.module.css'
import cx from 'classnames'

export default function UserSocialIcon(props) {

    return (
        <div className="icon-container">
            <div className="row">
                <p className={userSocialIconStyles.iconTag}>{props.username}</p>
                <a href={socialString(props.socialtype)}>
                    <img className={userSocialIconStyles.socialImg} src={socialImage(props.socialtype)}/>
                </a>
            </div>
        </div>
    )
}

function socialString(socialtype){
    switch(socialtype) {
        case "instagram":
            return "http://instagram.com/";
        case "twitter":
            return "http://twitter.com/";
        case "facebook":
            return "http://facebook.com/";
    }
}

function socialImage(socialtype){
    switch(socialtype) {
        case "instagram":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png";
        case "twitter":
            return "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png";
        case "facebook":
            return "https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png";
    }    
}