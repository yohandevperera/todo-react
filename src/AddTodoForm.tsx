import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "./types";
import {Button, Input} from 'antd';

interface AddTodoFormPorps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormPorps> = ({addTodo}) => {
    const [newTodo,setNewTodo] = useState("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewTodo(e.target.value);
    };

    
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    };
    
    return (

        <form>
            <Input placeholder="Enter the Task" allowClear type="text" value={newTodo} onChange={handleChange}/>
            <Button type="primary" onClick={() => handleSubmit }>Add todo</Button>
        </form>

    );
}
