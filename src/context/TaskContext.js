import React,{useState,createContext}from 'react';
export const TaskContext=createContext();
const initialState=[
    {title:"First Task",id:1},
    {title:"Second Task",id:2},
    {title:"Third Task",id:3}
]
export const TaskContextProvider =(props)=>{
    const[tasks,setTasks]=useState(initialState)
    const[itemEdit,setItemEdit]=useState(null)
    // const[tasks,setTasks]=useState({title:"First Task",id:1},{title:"Second Task",id:2},{title:"Third Task",id:3})
    const removeItem=(id)=>{
        console.log(id);
        const newTask=tasks.filter((item)=>item.id !== id);
        console.log(newTask);
        setTasks(newTask);
    }
    const addTask=(task)=>{
       console.log(task);
        setTasks([...tasks,task])//tasks=tasks+task
    }
    const findItem=(id)=>{
        console.log(`Edit : ${id}`);
        const task=tasks.find((item)=>item.id===id);
        console.log(task);
        setItemEdit(task);
    }
    const editTask=(task)=>{
        console.log(task);
        const tasksEdited=tasks.map((item)=> item.id === task.id ? task : item)
        setTasks(tasksEdited);
        setItemEdit(null);
    }
    return(
        <TaskContext.Provider value={{tasks,removeItem,addTask,findItem,itemEdit,editTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}