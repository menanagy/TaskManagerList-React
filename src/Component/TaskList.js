import React from 'react'

export default function TaskList() {
    return (
        <>
        <h1 className="text-center display-4 ">All Tasks</h1>
        <ul className="list-unstyled">
            
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
        </ul>
        </>
        )
 }  