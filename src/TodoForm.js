import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const id = useSelector(store => store.id_keeper);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        // const {name, value} = e.target;
        // setTodo(t => ({...t}))
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "INCREMENT_ID"});
        addTodo({todo, id});
        setTodo("");
    }
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <input 
                name="todo"
                type="text"
                placeholder="Todo"
                value={todo}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    </div>
  );
}

export default TodoForm;
