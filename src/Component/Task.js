import React ,{useContext}from 'react'
import { TaskContext} from '../context/TaskContext'

export default function Task({item}) {
    const{removeItem,findItem}= useContext(TaskContext);
    return (
      <li className="border p-3 my-3" >
                    {item.title}{/*Name of Task */}
                    <button className="btn btn-danger float-right mr-2" onClick={()=>removeItem(item.id)}>Delete</button>
                     <button className="btn btn-info float-right mr-2" onClick={()=>findItem(item.id)} >Edit </button> 
     </li>
    )
 }