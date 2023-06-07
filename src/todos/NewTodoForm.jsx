import React, {useState} from 'react';
import { connect } from 'react-redux';
import './TodoListItem.css';
import { addTodoRequest } from './thunks';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputState, setInputState] = useState('');


    const handleCreateTodo = () => {
        const isTodoDuplicated = todos.some(todo => todo.text === inputState);
        if(!isTodoDuplicated){
            onCreatePressed(inputState);
            setInputState('');
        }
    } 


    return(
    <div className='new-todo-form'>
        <input className='new-todo-input' type="text" placeholder='Type new todo here...'
             value={inputState} onChange={(e) => setInputState(e.target.value)} />
        <button className='new-todo-button' onClick={handleCreateTodo}>Create todo</button>
    </div>
);
    
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);