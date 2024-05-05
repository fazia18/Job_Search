import { combineReducers } from 'redux';
const initialState = {
    todos: [],
};

const todosReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    todos: todosReducer,
});

export default rootReducer;
