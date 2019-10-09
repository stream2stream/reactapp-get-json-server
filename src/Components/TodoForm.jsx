import React, { useState } from 'react';

import DateCreated from './DateCreated';

const TodoForm = props => {
    const [todoDescription, setTodoDescription] = useState(``);
    const [todoDateCreated, setTodoDateCreated] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        props.submitTodo(todoDescription, todoDateCreated);
        setTodoDescription(``);
        setTodoDateCreated(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="todoDescription">Description:</label>
                <input
                    type="text"
                    name="todoDescription"
                    placeholder="Todo Description"
                    value={todoDescription}
                    className="form-control"
                    onChange={e => setTodoDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="todoDateCreated">Created on:</label>
                <DateCreated
                    dateCreated={props.todo ? props.todo.todoDateCreated : null}
                    updateDateCreated={dateCreated => setTodoDateCreated(dateCreated)}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
        </form >
    );
};

export default TodoForm;