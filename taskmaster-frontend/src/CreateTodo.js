import React, { useState } from 'react';

function CreateTodo() {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/api/todos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setTitle(''); // Reset title for next input
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateTodo;
