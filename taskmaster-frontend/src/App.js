import './App.css';
import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

function App() {
  return (
    <div>
      <h1>Taskmaster Todos</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
