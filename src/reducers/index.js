import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


// function todoApp (state = {}, action) {

//     return {
//         visibiltyFilter: visibiltyFilter(state.visibiltyFilter, action),
//         todos: todos(state.todos, action)
//     }
// }


//  .... INSTEAD of using above, we import combineReducers to handle it

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;


// export default combineReducers({
//     visibilityFilter,
//     todos
// });

