import React from 'react';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="todoapp">
        <h1> Todo app</h1>
        <ToDo />
    </div>
  );
}

export default App;