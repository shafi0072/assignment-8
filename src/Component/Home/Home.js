import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';
import './Home.css'

const Home = () => {
    
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    },[]);
   
    return (
        <div className="mainHome">
            <h1 className="mainHedding">Cat Post Family</h1>
            
            {
                post.map(post => <Post post ={post}></Post>)
            }
        </div>
    );
};

export default Home;