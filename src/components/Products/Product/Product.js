import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core';
import { Rating } from '@mui/material';

import useStyles from './styles';

const Product = ({ id, image, name, color, price, currency, releaseDate, categoryId, rating }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card} sx={{ maxWidth: 345 }} style={{'borderBottom': `15px solid ${color}`}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Product Image"
                />
                <CardContent>
                    <Typography className={classes.centerText} gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography className={classes.centerText} variant="h6" color="textPrimary">{price} {currency}</Typography>
                    <Rating className={classes.centerRating} name="five" value={rating} readOnly />
                    <Typography className={classes.centerText} variant="body2" color="textSecondary">Realeased at {releaseDate}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
 
export default Product;