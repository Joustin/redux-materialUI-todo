import React from "react";
import PropTypes from "prop-types";

import { Tab, withStyles } from '@material-ui/core';

const styles = {
    button: {
        '&:disabled': {
            color: "red", 
            opacity: 1
        },
    }
}

const Link = ({ active, children, onClick, classes }) => (
    <Tab
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
        label={children}
        className={classes.button}
    />
     
);

// const Link = ({ active, children, onClick }) => {
//     if (active) {
//         return <span> {children} </span>
//     }

//     return (
//         // eslint-disable-next-line jsx-a11y/anchor-is-valid
//         <a 
//             href="" 
//             onClick= { e => {
//                 e.preventDefault();
//                 onClick();
//             }}
//         >
//             {children}
//         </a>
        
//     );
// };

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Link);