import  React, { useEffect }  from  "react";
import TodoListItem  from "./TodoListItem";
import NewTodoForm from './NewTodoForm.jsx';
import { connect } from "react-redux";
import { markTodoAsCompleted, removeTodo } from "./actions";
import './TodoList.css';
import { deleteTodoAction, displayAlert, loadTodos, updateTodoAction } from "./thunks";

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompleted, startLoadingTodos, isLoading }) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])
    const loadingMessage = <div>Loading todos...</div>;
    const content = (

        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onMarkAsCompleted={onMarkAsCompleted} onRemovePressed={onRemovePressed} key={todo.text} />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToPops = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToPops = dispatch => ({
    onRemovePressed: text =>  dispatch(deleteTodoAction(text)),
    onMarkAsCompleted: id => dispatch(updateTodoAction(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToPops, mapDispatchToPops)(TodoList);