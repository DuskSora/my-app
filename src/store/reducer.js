import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }
        case ADD_TODO_ITEM: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        }
        case DELETE_TODO_ITEM: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value, 1);
            return newState;
        }
        default:
        return defaultState;
    }
};