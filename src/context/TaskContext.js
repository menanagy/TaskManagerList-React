import React,{useState,createContext}from 'react';
export const TaskContext=createContext();
const initialState=[
    {title:"First Task",id:1},
    {title:"Second Task",id:2},
    {title:"Third Task",id:3}
]
export const TaskContextProvider =(props)=>{
    const[tasks,setTasks]=useState(initialState)
    
    // const[tasks,setTasks]=useState({title:"First Task",id:1},{title:"Second Task",id:2},{title:"Third Task",id:3})
    const removeItem=(id)=>{
        console.log(id);
    }
    return(
        <TaskContext.Provider value={{tasks,removeItem}}>
            {props.children}
        </TaskContext.Provider>
    )
}