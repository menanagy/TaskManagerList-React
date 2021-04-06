import React ,{useContext}from 'react'
import { TaskContext} from '../context/TaskContext'

export default function TaskList() {
    const{tasks}= useContext(TaskContext);
    console.log(tasks);
    return (
        <>
        <h1 className="text-center display-4 ">All Tasks</h1>
        <ul className="list-unstyled">
           {tasks.map((item,index)=>{
                return(<li className="border p-3 my-3" key={index}>
                    {item.title}{/*Name of Task */}
                    <button className="btn btn-danger float-right mr-2">Delete</button>
                    <button className="btn btn-info float-right mr-2">Edit</button>
                </li>)
           })}
           {/*
               <li className="border p-3 my-3">
                   Name of Task 
                   <button className="btn btn-danger float-right mr-2">Delete</button>
                   <button className="btn btn-info float-right mr-2">Edit</button>
               </li>
               
               
               <li className="border p-3 my-3">
                   Name of Task 
                   <button className="btn btn-danger float-right mr-2">Delete</button>
                   <button className="btn btn-info float-right mr-2">Edit</button>
               </li>
   
               <li className="border p-3 my-3">
                   Name of Task 
                   <button className="btn btn-danger float-right mr-2">Delete</button>
                   <button className="btn btn-info float-right mr-2">Edit</button>
               </li>

           */} 
        </ul>
        </>
        )
 }  