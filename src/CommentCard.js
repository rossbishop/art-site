import React from 'react'

export default function Comments(props) {
    return (
        <div class="card comment d-flex">
            <div class="card-header">
                <div class="text-left"><b>"{props.shortcomment}"</b> - {props.username}</div>
                <div class="text-right">{props.time} {props.date}</div>
            </div>
            <div class="card-body comment-text d-flex">
                <img class="profile-img" src='https://via.placeholder.com/96' />
                <div class="d-flex align-items-start flex-column" style="height: auto;">
                <div class="mb-auto">{props.comment}</div>
                    <div class="comment-reply">Like</div>
                </div>
            </div>
        </div>
    )
}