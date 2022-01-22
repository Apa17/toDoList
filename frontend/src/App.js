import React from 'react';
import './App.css';
import GetItems from './components/getItems';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todoapp">
        <h1> Todo app</h1>
        <TodoList />
        <GetItems/>
    </div>
  );
}

export default App;