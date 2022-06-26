import React,{useState} from ".react";
import { useTodoContext } from "./styles/TodoContext";
export default function Todonput(){
    const {todoList,setTodoList,currId,setCurrId}=useTodoContext()
    const [todoInput,setTodoInput]=useState("")
    const handleInputChange=(e)=>{
        setTodoInput(e.target.value)
    }
    const hndleInsertInput=(e)=>{
        let todoObj={
            text:todoInput,
            done:false,
            id:currId
        }
        setCurrId(currId+1)
        setTodoList([...todoList,todoObj])
    }
    return <section>
        <input type="text" onChange={handleInputChange}/>
        <button onClick={hndleInsertInput}>Insert</button>
    </section>
}