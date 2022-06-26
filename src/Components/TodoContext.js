import React,{useContext,useState} from "react";
var TodoContext=React.createContext();
export function useTodoContext(){
   return useContext(TodoContext) 
}

export function TodoContextProvider({child}){
    const [todoList,setTodoList]=useState([])
    const [currId,setCurrId]=useState(0)
    const filterList=(id)=>{
        let filteredList=todoList.filter((element)=>{
            return element.id!=id
        });
        setTodoList(filteredList)
    }


        const markAsDone=(id)=>{
            let markAsDoneOutput=[];
            for(let i=0;i<todoList.length;i++)
            {
                markAsDoneOutput[i]=todoList[i];
                if(todoList[i].id===id){
                    markAsDoneOutput[i].done=!markAsDoneOutput[i].done;
                }
            }
            setTodoList(markAsDoneOutput);
        }

    let value={
        todoList,
        setTodoList,
        currId,
        setCurrId,
        filterList,
        markAsDone
    };
// eslint-disable-next-line no-use-before-define
    return <TodoContext.Provider value={value}>
        {child}
    </TodoContext.Provider>
}