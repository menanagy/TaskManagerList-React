import { React } from 'react';
import{BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Component/Navbar.js'
import AddTask from './Component/AddTask';
import TaskList from './Component/TaskList.js';
import EditTask from './Component/EditTask';

import 'bootstrap/dist/css/bootstrap.min.css';
import {TaskContextProvider} from'./context/TaskContext'
function App() {
  return (
   
    <div>
      <BrowserRouter>
              <Navbar />
              <div className="container">
                <div className="row">  
                    <div className="col-10 mx-auto">
                      <Switch>
                          <TaskContextProvider>
                               <Route exact path="/" component={TaskList} />
                              <Route exact path="/add-task" component={AddTask} />
                          </TaskContextProvider>
                      </Switch>
                    </div>
                </div> 
              </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
