import React from "react"
import { useTodoContext } from "./styles/TodoContext"
import Todo from "./Todo"
function TodoDisplay(){
    const {todoList}=useTodoContext()
    return(
        <div>
            {todoList.map((element,index)=>{
                return <Todo key={index} todoObj={element}/>
            })}
        </div>
    )
}
export default TodoDisplay