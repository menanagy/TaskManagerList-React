import React ,{useContext}from 'react'
import { TaskContext} from '../context/TaskContext'
import Task from './Task'
import NotFoundTask from './NotFoundTask'
import EditTask from './EditTask';
export default function TaskList() {
    const{tasks,itemEdit}= useContext(TaskContext);
    //console.log(tasks);
    return (
        <>
        {itemEdit?<EditTask />:''}
        <h1 className="text-center display-4 ">All Tasks</h1>
        <ul className="list-unstyled">
                {
                       tasks.length? tasks.map((item,index)=>{
                            return(
                                 <Task item={item} key={index}/>
                                /*   <li className="border p-3 my-3" key={index}>
                                    {item.title}
                                    <button className="btn btn-danger float-right mr-2">Delete</button>
                                    <button className="btn btn-info float-right mr-2">Edit</button>
                                </li>*/
                            )
                         }):<NotFoundTask />
                }
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