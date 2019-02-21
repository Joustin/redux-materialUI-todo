import * as types from './actionTypes';

let nextTodoId = 0;

// export function addTodo(text) {
//     return { 
//             type: types.ADD_TODO, 
//             id: nextTodoId++, 
//             text
//         };
// }

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

// export function toggleTodo (id) {
//     return { 
//             type: types.TOGGLE_TODO, 
//             id
//         };
// }

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

// export function setVisibilityFilter (filter) {
//     return { 
//             type: types.SET_VISIBILITY_FILTER,
//             filter 
//         };
// }

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}