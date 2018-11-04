const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_input_value': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }
        case 'add_todo_item': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        }
    }
    return defaultState;
};