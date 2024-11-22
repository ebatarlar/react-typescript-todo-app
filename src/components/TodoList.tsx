import React from 'react'
import './styles.css'
import { Todo, TodoAction } from './model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    dispatch: React.Dispatch<TodoAction>;
    
}

const TodoList:React.FC<Props> = ({todos , dispatch}) => {
  return (
    <div className='todos' >
        {
            todos.map(
                (todo) => (
                    <SingleTodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        dispatch={dispatch}
                    />
                )
            )
        }
    </div>
  )
}

export default TodoList