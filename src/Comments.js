import React from 'react'
import data from './FrontPageDummyData'
import CommentCard from './CommentCard'

export default function Comments(props) {
    data.map(item => console.log(item.name))  
    return (
        <div class="container">
            <h3>Comments</h3>
            <div class="form-group">
                <label for="commentFormInput1">Type a comment:</label>
                <textarea class="form-control comment-box" id="commentFormTextArea1" rows="1"></textarea>
            </div>
            <button type="button" class="btn btn-primary comment-button">Submit</button>
            <button type="button" class="btn btn-danger comment-button">Cancel</button>
            {
                data.map(item => {
                    return (
                        <CommentCard
                            id={item.id}
                            shortcomment={item.shortcomment}
                            username={item.username}
                            time={item.time}
                            date={item.date}
                            comment={item.comment}
                            likes={item.likes}
                        />
                    )
                })
            }
        </div>
    )
}
