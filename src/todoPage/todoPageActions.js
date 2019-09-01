export const ADD_TODO = 'todoPage/ADD_TODO';
export const EDIT_TODO = 'todoPage/EDIT_TODO';


export const addTodo = (todotext) => {
    return {
        type: ADD_TODO,
        payload: todotext
    }
}

export const editTodo = (todoItem) => {
    return {
        type: EDIT_TODO,
        payload: todoItem
    }
}
