import React from 'react'
import './style.css'

interface Props{
 todo:string;
 setTodo: React.Dispatch<React.SetStateAction<string>>;
 handleAdd:()=>void;
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
  
  return (
    <div>
      <form className='input' onSubmit={handleAdd}>
        <input type="input" placeholder="enter a task" className='input_box' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit" className='input_submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
