import React, { useReducer, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import todoReducer from './components/todoReducer';




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer , [])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      dispatch({ type: 'ADD_TODO' , payload: todo})
      setTodo("");
    }


  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>

      <InputField todo={todo} setTodo = {setTodo} handleAdd = {handleAdd} />
      <TodoList  todos={todos} dispatch={dispatch}/>

    </div>
  );
}

export default App;
