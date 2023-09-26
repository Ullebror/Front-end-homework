import React, { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    setTodos(prevTodos => prevTodos.filter((todo, i) => i !== index));
    
  }

  return (
    <div>
        Add todo: <br></br>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <button onClick={addTodo}>Add</button>
    
      <table>
        <tbody>
            <tr><th>Date</th><th>Description</th></tr>
        {
          todos.map((todo, index) => 
            <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td> 
                <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>)
        }
        </tbody>
      </table>   
    </div>
  );
}

export default TodoList;