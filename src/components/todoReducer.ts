
import { Todo, TodoAction } from './model'

const todoReducer = (state: Todo[] , action: TodoAction) : Todo[] => {

  switch (action.type) {
    case 'ADD_TODO':

      return [...state , {id: Date.now(), todo: action.payload , isDone: false}];
      
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'TOGGLE_TODO':
      return  state.map(todo => todo.id === action.payload ? {...todo , isDone: !todo.isDone }  : todo);

    case 'EDIT_TODO':
      return state.map(todo => todo.id === action.payload.id ? {...todo , todo:action.payload.text} : todo);
  
    default:
      return state;
      
  }
    


  
}

export default todoReducer