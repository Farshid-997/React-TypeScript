import React, { useState } from 'react';
import './App.css';
import InputField from './Component/InputField/InputField';
import { Todo } from './Component/model';
const App:React.FC=() =>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([])

 const handleAdd=()=>{
if(todo){
setTodos([...todos,{id:Date.now(),todo,isDone:false}])
setTodo("");

}
console.log(setTodos)
  }
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
    </div>
  );
}

export default App;
