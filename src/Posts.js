import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Posts.css'

function Posts({ name, caption, imageUrl }) {
    return (
        <div className='post'>
            <div className="postHeader">
                <Avatar className ="avatar">{name.charAt(0)}</Avatar>
                <h5>{name}</h5>
            </div>
            <img className="postPhoto" src={imageUrl} alt="post "></img>
            <div className="postFooter">
                <div className='postCaption'>
                    <strong class="postCaptionName">{name}</strong>
                    <p>{caption}</p>
                </div>

            </div>
        </div>
    )
}

export default Posts
