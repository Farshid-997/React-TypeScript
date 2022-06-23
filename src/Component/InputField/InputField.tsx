import React, { useRef } from 'react'
import '../../Component/CSS/style.css'

interface Props{
 todo:string;
 setTodo: React.Dispatch<React.SetStateAction<string>>;
 handleAdd:(e:React.FormEvent)=>void
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
const inputRef=useRef<HTMLInputElement>(null)
  return (
    <div>
      <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
      }}>
        <input type="input" placeholder="enter a task" className='input_box' value={todo} ref={inputRef} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit" className='input_submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
