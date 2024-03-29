import React, { useState } from 'react';

function CreateTodo({ onTodoCreated }) {
    // Initialize state as an object with both fields
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

    // Update state for each field
    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/todos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Clear form or handle success (e.g., update TodoList)
                setTodo({
                    title: '',
                    description: '',
                });
                // Now call onTodoCreated to refresh the todo list
                onTodoCreated();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default CreateTodo;
