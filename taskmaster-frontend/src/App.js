import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch('http://localhost:8000/api/todos/')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching data: ', error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Taskmaster Todos</h1>
        <CreateTodo onTodoCreated={fetchTodos} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
