import { VisibilityFilters } from '../actions';

// NOT used anymore

// import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionTypes';

// const initialState = {
//     visibiltyFilter: VisibiltyFilters.SHOW_ALL,
//     todos: []
// }

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;



