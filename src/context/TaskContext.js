import React,{useState,createContext}from 'react';
import { TaskContext } from './TaskContext';
export const TaskContext=createContext();
const initialState=[
    {title:"First Task",id:1},
    {title:"First Task",id:2},
    {title:"Third Task",id:3}
]
export const TaskContextProvider =(props)=>{
    const[tasks,setTasks]=useState(initialState)
    // const[tasks,setTasks]=useState({title:"First Task",id:1},{title:"First Task",id:2},{title:"Third Task",id:3})
    return(
        <TaskContext.Provider value={{tasks}}>
            {props.children}
        </TaskContext.Provider>
    )
}