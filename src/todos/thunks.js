import { createTodo, loadTodosFailure, loadTodosInProgress, loadTodosSuccess, markTodoAsCompleted, removeTodo } from "./actions";

export const displayAlert = text => () => {
    alert(`thunk says: ${text}`);
};

export const loadTodos = () => async (dispatch, getState) => {

    try{
        console.log('En el thunk');
        
        dispatch(loadTodosInProgress());
        fetch('http://localhost:8080/todos')
        .then( res => res.json())
        .then(data => {
             dispatch(loadTodosSuccess(data));
            }
        )
    }catch (err){
        dispatch(loadTodosFailure())
        displayAlert(err);
    }

}

export const addTodoRequest = text => async dispatch => {
    const body = JSON.stringify({text: text});
    const response = await fetch( 'http://localhost:8080/todos', {
        headers: {'Content-type': 'application/json'},
        method: 'post',
        body: body
    });
    const res = await response.json();
    dispatch(createTodo(res));
}

export const deleteTodoAction = id => async dispatch => {
    try {
        const response = await fetch( `http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const todo = await response.json();
        console.log(todo);
        dispatch(removeTodo(todo.text));
        
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

export const updateTodoAction = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(id));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

