import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: "black",
    }
}

function Header({ classes }) {
    //const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <Typography variant="h6" className={classes.grow}>
              Redux Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (Header);