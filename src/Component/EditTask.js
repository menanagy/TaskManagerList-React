import React ,{useState,useContext,useEffect}from 'react'
import { TaskContext} from '../context/TaskContext'

export default function EditTask() {
    const [title,setTitle]=useState('');
    const{editTask,itemEdit}= useContext(TaskContext);
    const handleSumbit=(event)=>{
        event.preventDefault();
        editTask({title:title,id:itemEdit.id});
        //Clear Input 
        setTitle('');
    }
    const handleChange=(event)=>{
        setTitle(event.target.value);

    }
    useEffect(() => {
        if(itemEdit!=null) {
            setTitle(itemEdit.title);
        }
    },[itemEdit])

    return (
        <div>
                <form className="border my-3 p-3" onSubmit={handleSumbit}>
                        <div className="form-group">
                            <h1 className="text-center display-4">Edit Task</h1>
                            <input type="text" className="form-control" onChange={handleChange} value ={title} placeholder="Type title of Task" />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Submit</button>
                </form>
        </div>
    )
}
