import React from 'react'

export default function CommentCard(props) {
    return (
        <div className="card comment d-flex">
            <div className="card-header">
                <div className="text-left">by <b>{props.username}</b></div>
                <div className="text-right">{props.time} {props.date}</div>
            </div>
            <div className="card-body comment-text d-flex">
                <img className="profile-img" src='https://via.placeholder.com/96' />
                <div className="d-flex align-items-start flex-column comment-card" />
                <div className="mb-auto">{props.comment}
                    <div className="comment-reply">Like</div>
                </div>
            </div>
        </div>
    )
}