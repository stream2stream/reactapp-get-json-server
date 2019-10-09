import React from 'react';

const Todo = props => {
    const dateCreated = new Date(Date.parse(props.todo.todoDateCreated)).toUTCString();
    return (
        <tr>
            <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoDescription}</td>
            <td className={props.todo.todoCompleted ? 'completed' : ''}>{dateCreated}</td>
            <td >
                {props.todo.todoCompleted ? `N/A` : <a href="#">Edit</a>}
            </td>
        </tr>
    );
};

export default Todo;
