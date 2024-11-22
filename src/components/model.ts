export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}

export type TodoAction = 
    | {type: 'ADD_TODO'; payload: string}
    | {type: 'REMOVE_TODO'; payload: number}
    | {type: 'TOGGLE_TODO'; payload: number}
    | {type: 'EDIT_TODO'; payload: {id: number; text:string;} }


