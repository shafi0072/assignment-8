import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

import './Post.css'



const useStyles = makeStyles({
    root: {
        maxWidth: 348
    }
});
const Post = (props) => {
    const classes = useStyles();
    const {id, title, body, userId} = props.post;
   

    return (
        <div className="main2">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`https://loremflickr.com/600/400?random=${id}`}
                        title="Contemplative Reptile"/>
                    <CardContent>
                        <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                            {title}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Link to={`/${id}`}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>

                </CardActions>
            </Card>
           
        </div>
    );
};

export default Post;