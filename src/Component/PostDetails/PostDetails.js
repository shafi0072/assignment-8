import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
import './PostDetails.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    
  },
  media: {
    height: 700,
  },
})

const PostDetails = () => {
    const classes = useStyles();

    const {userId, postId} = useParams();
    const [postinfo, setPostInfo] = useState({})
    const {title, body, id} = postinfo 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
        .then(data => setPostInfo(data))
    });
    const [comment, setComment] = useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => res.json())
      .then(data => setComment(data))
    },[]);
    return (
      
        <div className="main1">
          <div>
            <Link to="/home">
            <button className="homeButton">Home</button>
            </Link>
          </div>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://loremflickr.com/600/400?random=${id}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <h2>Comments:</h2>
      </CardActions>
      {
        comment.map(comment => <Comment comment= {comment} ></Comment>)
      }
    </Card>
        </div>
    );
};

export default PostDetails;