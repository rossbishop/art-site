import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import commentCardStyles from './css/commentcard.module.css'
import cx from 'classnames'

export default function CommentCard(props) {
    return (
        <div className={cx(commentCardStyles.comment, "card", "d-flex")}>
            <div className={commentCardStyles.cardHeader}>
                <div className="text-left">by <b>{props.username}</b></div>
                <div className="text-right">{props.time} {props.date}</div>
            </div>
            <div className={cx(commentCardStyles.commentText, "card-body", "d-flex")}>
                <img className={commentCardStyles.profileImgSmall} src='https://via.placeholder.com/96' />
                <div className="d-flex align-items-start flex-column" />
                <div className="mb-auto">{props.comment}
                    <div className={commentCardStyles.commentReply}>Like</div>
                </div>
            </div>
        </div>
    )
}