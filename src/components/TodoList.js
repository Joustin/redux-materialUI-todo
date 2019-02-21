import React from "react";
import PropTypes from "prop-types";

// import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, List, withStyles } from '@material-ui/core';

import Todo from './Todo';

// const TodoList = ({ todos, onTodoClick }) => (
//     <ul>
//         {todos.map((todo, index) => (
//             <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
//         ))}
//     </ul>
// );


const styles = {
    root: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    paper: {
        padding: 10,
        width: "80%", 
        margin: "auto"
    }
}
  

const TodoList = ({ todos, toggleTodo, classes }) => (


    <Grid className={classes.root} container>
        <Grid item sm>
            {!todos || !todos.length
                ? (
                    console.log("yes")
                )
                : (
                    <Paper square className={classes.paper} elevation={1}>
                        <List>
                            {todos.map(todo => (
                                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                            ))}
                        </List>
                    </Paper>
                )
            }

        </Grid>
    </Grid>
);


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    //onTodoClick: PropTypes.func.isRequired
    toggleTodo: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TodoList);