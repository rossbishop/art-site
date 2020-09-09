import React from 'react'
import CommentCard from './CommentCard'

export default function Comments(props) {

console.log(props);

    return (
        <div className="container">
            <h3>Comments</h3>
            <div className="form-group">
                <label for="commentFormInput1">Type a comment:</label>
                <textarea className="form-control comment-box" id="commentFormTextArea1" rows="1"></textarea>
            </div>
            <button type="button" className="btn btn-primary comment-button">Submit</button>
            <button type="button" className="btn btn-danger comment-button">Cancel</button>
            {
                props.commentArray.map(item => {
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
