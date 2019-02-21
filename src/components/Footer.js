import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

import PropTypes from "prop-types";

import { Paper, withStyles } from '@material-ui/core';

const styles = {
    footer: {
        marginTop: 40,
        marginBottom: 40,
    },
    view: {
        marginBottom: 10
    }
}

const Footer = ({ classes }) => (
    <div className={classes.footer}>
        <div className={classes.view}>VIEW</div> 
        <Paper >

                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>

        </Paper>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);