import React from 'react'
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
  return (
    <div>
      <form className="todos__single">

        {
          todo.isDone?(
            <s  className="todos__single--text">
            {todo.todo}
                    </s>
          ):(
            <span  className="todos__single--text">
            {todo.todo}
                    </span>
          )
        }
      

        <div>
            <span
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
