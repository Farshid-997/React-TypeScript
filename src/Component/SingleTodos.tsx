import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import  './CSS/style.css'
type Props={
  todo:Todo,
  todos:Todo[],
 setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
}


const SingleTodos = ({todo,todos,setTodos}:Props) => {
const [edit,setEdit]=useState<boolean>(false)
const [editTodo,setEditTodo]=useState<string>(todo.todo)
  const handleDelete=(id:number)=>{
setTodos(
  todos.filter((todo)=>todo.id!==id)
)
}

const handleDone=(id:number)=>{
  setTodos(
    todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo)
  )
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <div>
      <form className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>

 {edit ? (
  <input
    value={editTodo}
    onChange={(e) => setEditTodo(e.target.value)}
    className="todos__single--text"
    ref={inputRef}
  />
) : todo.isDone ? (
  <s className="todos__single--text">{todo.todo}</s>
) : (
  <span className="todos__single--text">{todo.todo}</span>
)}

        {/* {
          todo.isDone?(
            <s  className="todos__single--text">
            {todo.todo}
                    </s>
          ):(
            <span  className="todos__single--text">
            {todo.todo}
                    </span>
          )
        } */}
      

        <div>
            <span onClick={()=>{
              if(!edit && !todo.isDone){
                setEdit(!edit);
              }
            }} 
              className="icon"
            
            >
              <AiFillEdit />
            </span>
            <span className="icon">
              <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
            </span>
            <span className="icon">
              <MdDone onClick={()=>handleDone(todo.id)} />
            </span>
          </div>
      </form>
    </div>
  )
}

export default SingleTodos
