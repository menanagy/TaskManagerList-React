import React from 'react'

export default function AddTask() {
    return (
        <div>
                <form className="border my-3 p-3">
                        <div className="form-group">
                            <h1 className="text-center display-4">Add New Task</h1>
                            <input type="text" className="form-control" placeholder="Type title of Task" />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Submit</button>
                </form>
        </div>
    )
}
