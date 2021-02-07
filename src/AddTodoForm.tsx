import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "./types";

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
            <input  type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add todo</button>
        </form>

    );
}