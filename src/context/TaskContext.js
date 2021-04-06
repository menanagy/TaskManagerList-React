import React,{useState,createContext,useEffect}from 'react';
export const TaskContext=createContext();
/*const initialState=[
    {title:"First Task",id:1},
    {title:"Second Task",id:2},
    {title:"Third Task",id:3}
]*/ //Replacing By Using Local Storage
export const TaskContextProvider =(props)=>{
    // const[tasks,setTasks]=useState([]);

    const[tasks,setTasks]=useState(JSON.parse(localStorage.getItem('tasks_list'))||[]);
    const[itemEdit,setItemEdit]=useState(null)
    // const[tasks,setTasks]=useState({title:"First Task",id:1},{title:"Second Task",id:2},{title:"Third Task",id:3})
    
    useEffect(() => {
        localStorage.setItem('tasks_list', JSON.stringify(tasks))
     }, [tasks])
     
    
    //When Press Delet Button
    const removeItem=(id)=>{
        console.log(id);
        const newTask=tasks.filter((item)=>item.id !== id);
        console.log(newTask);
        setTasks(newTask);
    }

    //Add Task

    const addTask=(task)=>{
       console.log(task);
        setTasks([...tasks,task])//tasks=tasks+task
    }
    
    //Get Element when press Edit Button 
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