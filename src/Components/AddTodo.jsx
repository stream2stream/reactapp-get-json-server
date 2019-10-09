import React from 'react';
import './css/AddTodo.css';
import generateTodoId from './utils/generateId';
import TodoForm from './TodoForm';


const AddTodo = props => {
    const submitTodo = (todoDescription, todoDateCreated) => {
        const _id = generateTodoId();
        todoDateCreated = new Date(todoDateCreated).toISOString();
        const newTodo = { _id, todoDescription, todoDateCreated, todoCompleted: false };
        props.submitTodo(newTodo);
    };

    return (
        <div className="addTodo container">
            <h3>Add Todo</h3>
            <TodoForm submitTodo={submitTodo} />
        </div>
    );
};

export default AddTodo;
