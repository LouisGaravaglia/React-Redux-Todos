import React from 'react';
import './App.css';

function Todo({todo, removeTodo}) {
  return (
    <div className="Todo">
      <p>{todo}</p>
      <button onClick={removeTodo}>x</button>
    </div>
  );
}

export default Todo;
