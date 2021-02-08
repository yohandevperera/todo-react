import React from 'react';
import "./TodoListItem.css"
import { Todo, ToggleTodo } from './types';
import  {  Checkbox  } from 'antd';


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo,toggleTodo}) =>{
return (<li>
    <label className={todo.complete?"complete":undefined}>
        {/* <input type="checkbox" checked={todo.complete} onChange={()=> toggleTodo(todo)}/> */}
        <Checkbox onChange={()=> toggleTodo(todo)} checked={todo.complete}></Checkbox>
        {todo.text}
    </label>
    </li>);
};

