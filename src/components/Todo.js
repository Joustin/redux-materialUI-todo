import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, ListItemIcon, withStyles } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';

const styles = {
    // root: {
    //     buttonRipple: { 
    //         color: "#f00" 
    //     }
    // },
    item: {
        '&:hover': {
            cursor: "pointer", 
            backgroundColor: "transparent"
        },
        '&:focus': {
            backgroundColor: "transparent"
        },
        color: "#e65100"
    },
    completed: {
        '& span': {
            color: "#e65100"
        }
    }
}


const Todo = ({ onClick, completed, text, classes }) => (
    <ListItem button 
        onClick={onClick} 
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        className={classes.item}
    >
        <ListItemIcon>
            {completed 
                ? <Star color='secondary' /> 
                : <StarBorder /> 
            }
        </ListItemIcon>
        <ListItemText 
            primary={text} 
            className={
                completed ? classes.completed : ' '
            }
        />
    </ListItem>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Todo);