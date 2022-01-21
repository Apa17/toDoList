import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todoapp">
        <h1> Todo app</h1>
        <TodoList />
    </div>
  );
}

export default App;