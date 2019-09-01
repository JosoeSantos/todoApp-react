import { ADD_TODO, EDIT_TODO } from './todoPageActions';

const INITIAL_STATE = {
    todoList: []
};

const generateRandomId = () => {
    return `${Date.now()}-${Math.random()}`;
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: generateRandomId(),
                        text: action.payload.text,
                        title: action.payload.title,
                        status: 'TODO'
                    }
                ]
            };
            
        case EDIT_TODO:
            let todoToChange = state.todoList.findIndex(item => item.id === action.payload.id);
            state.todoList[todoToChange] = action.payload;
            console.log(action.payload);

            return { ...state };
        default:
            return state;
    }
};
