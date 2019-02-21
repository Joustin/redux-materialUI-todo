import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import PropTypes from "prop-types";

import { Button, withStyles } from '@material-ui/core';


const styles = {
    root: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputField: {
        width: 200,
        marginRight: 10,
        padding: 5
    }, 
    form: {
        marginTop: 40,
        marginBottom: 40,
    }
}


let AddTodo = ({ dispatch, classes }) => {

    // const { classes } = this.props;

    let input;

    return (
        <div className={classes.form}>
            <form 
                onSubmit={ e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input 
                    ref={ node => {
                        input = node;
                    }}
                    className={classes.inputField}
                />

                <Button variant="outlined" color="primary" type="submit">Add Todo</Button>
            </form>
        </div>
    );
}

AddTodo.propTypes = {
    classes: PropTypes.object.isRequired
}

AddTodo = connect()(AddTodo);

export default withStyles(styles)(AddTodo);
