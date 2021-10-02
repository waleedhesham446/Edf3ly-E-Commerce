import React from 'react';
import { Button, Typography, Container, Radio } from '@material-ui/core';
import { Rating } from '@mui/material';
import { Clear } from '@material-ui/icons';

import useStyles from './styles';

const RatingComponent = ({ selectedRating, setSelectedRating }) => {
    const classes = useStyles();
    
    return (
        <>
        <Typography className={classes.filterHead}>Average Rating</Typography>
        <Container className={classes.mainContainer}>
            <Container className={classes.rating}>
                <Radio
                    checked={selectedRating === 5}
                    onChange={() => setSelectedRating(5)}
                    color='primary'
                />
                <Rating name="five" value={5} readOnly />
            </Container>
            <Container className={classes.rating}>
                <Radio
                    checked={selectedRating === 4}
                    onChange={() => setSelectedRating(4)}
                    color='primary'
                />
                <Rating name="four" value={4} readOnly />
            </Container>
            <Container className={classes.rating}>
                <Radio
                    checked={selectedRating === 3}
                    onChange={() => setSelectedRating(3)}
                    color='primary'
                />
                <Rating name="three" value={3} readOnly />
            </Container>
            <Container className={classes.rating}>
                <Radio
                    checked={selectedRating === 2}
                    onChange={() => setSelectedRating(2)}
                    color='primary'
                />
                <Rating name="two" value={2} readOnly />
            </Container>
            <Container className={classes.rating}>
                <Radio
                    checked={selectedRating === 1}
                    onChange={() => setSelectedRating(1)}
                    color='primary'
                />
                <Rating name="one" value={1} readOnly />
            </Container>
        </Container>
        
        <Button className={classes.button} variant="text" onClick={() => setSelectedRating(0)}>
            <Clear />
            Clear
        </Button>
        </>
    );
}
 
export default RatingComponent;