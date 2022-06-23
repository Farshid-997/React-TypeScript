import React, { useState } from 'react';
import './App.css';
import InputField from './Component/InputField/InputField';
import { Todo } from './Component/model';
import TodoList from './Component/TodoList/TodoList';
const App:React.FC=() =>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([])

 const handleAdd=(e:React.FormEvent<EventTarget>)=>{
  e.preventDefault();
if(todo){
setTodos([...todos,{id:Date.now(),todo,isDone:false}])
setTodo("");

}

  }


  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
<TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
