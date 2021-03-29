import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar.js'
import AddTask from './Component/AddTask';
function App() {
  return (
    <div>
      {/* <h1 className="text-center display-5">Hello Mina</h1> */}
      <Navbar />
      <div className="container">
        <div className="row">  
            <div className="col-10 mx-auto">
                <AddTask />
            </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
