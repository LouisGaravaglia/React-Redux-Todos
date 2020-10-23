import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);
  const addTodo = todo => {
    dispatch({type:"ADD_TODO", todo})
  }
  const removeTodo = id => {
    dispatch({type:"REMOVE_TODO", id})
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      {todos.map(t => <Todo key={t.id} todo={t.todo} removeTodo={() => removeTodo(t.id)}/>)}
    </div>
  );
}

export default App;
