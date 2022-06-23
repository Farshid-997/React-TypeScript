import React from 'react'
import { Todo } from '../model'
import SingleTodos from '../SingleTodos';
import '../CSS/style.css'
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({ todos, setTodos }: Props) => {

  return (
    <div>
      {
        todos.map((todo) => (
          <SingleTodos todo={todo} key={todo.id} setTodos={setTodos} todos={todos}></SingleTodos>
        ))}
    </div>
  )
}

export default TodoList
