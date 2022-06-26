import React,{useState} from "react";
import "./styles/todo.css"
import {useTodoContext} from "./styles/TodoContext"
function Todo({todoObj}){
    const {filterList,markAsDone}=useTodoContext
    const deleteTodo=()=>{
        filterList(todoObj.id)
    }
    const handleTodoDone=()=>{
        markAsDone(todoObj.id)
    }
    return (
        <div>
             <span className={todoObj.done?"strike-todo":""}>{todoObj.text}</span>
             <button onClick={handleTodoDone}>Done/Undone</button>
             <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;




