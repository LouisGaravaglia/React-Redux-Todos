const INITIAL_STATE = {todos:[], id_keeper:0}

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todos:[...state.todos, {...action.todo}]};
        case "REMOVE_TODO":
            return {...state, todos: state.todos.filter(t => t.id !== action.id)};
        case "INCREMENT_ID":
            return {...state, id_keeper: state.id_keeper + 1}
        default:
            return state;
    }
}

export default rootReducer;