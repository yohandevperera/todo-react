import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo, AddTodo } from './types';



const intialTodos: Array<Todo> = [
{text:"Test Todo",complete: true},
{text:"Make App",complete: false}
]

const App: React.FC = () =>{
  const [todos,setTodos] = useState(intialTodos);

  const toggleTodos: ToggleTodo = selectedTodo =>{
    const newTodos = todos.map(todos =>{
      if(todos == selectedTodo){
         return {
           ...todos,
           complete: !todos.complete
         }
      }
      return todos;
    });
    setTodos(newTodos)
  };

  const addTodo: AddTodo = newTodo =>{
     setTodos([...todos,{text: newTodo, complete:false}])
  }  

  return(
  <React.Fragment>
  <TodoList todos = {todos} ToggleTodo ={toggleTodos}/>
  <AddTodoForm addTodo={addTodo}/>
  </React.Fragment>
  )
}

export default App;