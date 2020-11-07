import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import commentCardStyles from './css/commentcard.module.css'
import {Link} from "react-router-dom";
import cx from 'classnames'

import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'
import AmplifyImage from './AmplifyImage'

export default function CommentCard(props) {

    const [avatarKey, setAvatarKey] = useState()

    useEffect(() => {
        if(props.username != undefined)
        {
            getAvatar()
        }
    }, [props.username])

    const getAvatar = async () => {
        try {
            let apiCall = await API.graphql({query: queries.publicUserProfileByUser, variables: {owner: props.username}})
            setAvatarKey(apiCall.data.publicUserProfileByUser.items[0].avatarImgFile.key)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={cx(commentCardStyles.comment, "card", "d-flex")}>
            <div className={cx(commentCardStyles.cardHeader, "card-header")}>
                <div className="text-left">by <b><Link className={commentCardStyles.links} to={`/user/${props.username}`}>{props.username}</Link></b></div>
                <div className="text-right">{props.time} {props.date}</div>
            </div>
            <div className={cx(commentCardStyles.commentText, "card-body", "d-flex")}>
                {avatarKey && (
                    <AmplifyImage 
                        imgKey={avatarKey}
                        style={commentCardStyles.profileImgSmall}
                    />
                )}
                {/* <img className={commentCardStyles.profileImgSmall} src='https://via.placeholder.com/96' /> */}
                <div className="d-flex align-items-start flex-column" />
                <div className="mb-auto">{props.comment}
                    {/* <div className={commentCardStyles.commentReply}>Like</div> */}
                </div>
            </div>
        </div>
    )
}