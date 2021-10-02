import React, { useState, useEffect } from 'react';
import { Button, Typography, TextField, Container, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import useStyles from './styles';

const Colors = ({ allColors, selectedColors, setSelectedColors, categoryId }) => {
    const classes = useStyles();
    const [searchColor, setSearchColor] = useState('');

    const handleChangeColors = (i) => {
        if(selectedColors.includes(i)){
            //  removing color
            setSelectedColors(selectedColors.filter(color => color !== i));
        } else{
            //  adding color
            setSelectedColors([...selectedColors, i]);
        }
    }

    //  clear the selected colors list when products category changed
    useEffect(() => {
        if(selectedColors.length) setSelectedColors([]);
    }, [categoryId]);
    
    return (
        <>
        <Typography className={classes.filterHead}>Color</Typography>
        <TextField placeholder='Enter color' className={classes.colorSearchInput} variant='outlined' value={searchColor} onChange={(e) => setSearchColor(e.target.value)} />
        <Container className={classes.mainContainer}>
            {allColors?.length ? (
                <FormGroup className={classes.checkBoxesContainer}>
                    {allColors.map((color, i) => (
                        <FormControlLabel key={i} control={<Checkbox checked={selectedColors.includes(i)} onChange={() => handleChangeColors(i)} color='primary' />} label={color} style={{display: (!searchColor || color.includes(searchColor)) ? 'block' : 'none'}} />
                    ))}
                </FormGroup>
            ) : (
                <Typography>NO COLORS</Typography>
            )}
        </Container>
        
        <Button className={classes.button} variant="text" onClick={() => {
            setSelectedColors([]);
            setSearchColor('');
        }}>
            <Clear />
            Clear
        </Button>
        </>
    );
}
 
export default Colors;