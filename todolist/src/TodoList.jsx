import { useState } from 'react';
import TodoTable from './TodoTable';

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
    <>
        Add todo: <br></br>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo = {deleteTodo} />

        
      </>
  );
}

export default TodoList;