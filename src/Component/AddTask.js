import React ,{useState,useContext}from 'react'
import { TaskContext} from '../context/TaskContext'
import TaskList from './TaskList';

export default function AddTask() {
    const [title,setTitle]=useState('');
    const{addTask}= useContext(TaskContext);
    const handleSumbit=(event)=>{
        event.preventDefault();
        addTask({title:title,id:Math.floor(Math.random()*10000)});
        //Clear Input 
        setTitle('');
    }
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }

    return (
        <div>
                <form className="border my-3 p-3" onSubmit={handleSumbit}>
                        <div className="form-group">
                            <h1 className="text-center display-4">Add New Task</h1>
                            <input type="text" className="form-control" onChange={handleChange} value ={title} placeholder="Type title of Task" />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Submit</button>
                </form>
                <TaskList />
        </div>
    )
}
