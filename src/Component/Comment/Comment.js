import React from 'react';
import './Component.css'

const Comment = (props) => {
    
    const {name,body, id} = props.comment
    return (
        <div className='main'>
            <div>
            <img className='image' src={`https://loremflickr.com/600/400?random=${id}`} alt=""/>
            </div>
            <div>
            <h4>{name}:</h4>
            <p>{body}</p>
            </div>
        </div>
    );
};

export default Comment;