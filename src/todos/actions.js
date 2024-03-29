export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO =  'REMOVE_TODO';
export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';


export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const markTodoAsCompleted = id => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: {id: id}
});

export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS
});


export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos: todos}
});


export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE
});


