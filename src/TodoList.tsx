import React  from 'react';
import { TodoListItem } from "./TodoListItem"  ;
import { Todo, ToggleTodo } from "./types";

interface TodoListProps {
    todos:Array<Todo>;
    ToggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos,ToggleTodo }) =>{
     return(
     <ul>
         {todos.map(todo=>{
         return <TodoListItem key={todo.text} todo={todo} toggleTodo={ToggleTodo}/>
     })}
     </ul>
     )
}