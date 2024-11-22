import React, { useEffect, useRef, useState } from 'react'
import { Todo, TodoAction } from './model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

type Props = {
  todo: Todo;
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const SingleTodo = ({ todo, todos, dispatch }: Props) => {


    const [edit, setEdit]         = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    


    const handleDone = (id: number) => {
        
        dispatch({type: 'TOGGLE_TODO' , payload: id});
        
    };

    const handleDelete = (id:number) => {
        dispatch({type: 'REMOVE_TODO' , payload: id});
    };

    const handleEdit = (e:React.FormEvent<HTMLFormElement>, id:number) => {
        e.preventDefault();

        dispatch({type: 'EDIT_TODO' , payload: {id: id , text:editTodo}});

        setEdit(false);
    }


  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e , todo.id)}>

        {
            edit ? (<input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos_single--text'/>):
                todo.isDone ? ( <s className="todos_single--text">{todo.todo}</s>) : (
                    <span className="todos_single--text">
                      {todo.todo}
                    </span>
                  )
            
        }
      
      <div>
        <span className="icon" onClick={() => {
            if(!edit && !todo.isDone){setEdit(!edit)}
        }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;