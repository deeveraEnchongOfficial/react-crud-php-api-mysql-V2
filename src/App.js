import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="row pt-5">
                    <div className="col-md-11">
                      <h3>ReactJs Crud</h3>
                    </div>
                    <div className="col-md-1">
                    <Link to="user/create"><button type="button" className="btn btn-success">
                        CreateUser
                      </button></Link>
                    </div>
                  </div>
                  
                    <Routes>
                      <Route index element={<ListUser />} />
                      <Route path="user/create" element={<CreateUser />} />
                      <Route path="user/:id/edit" element={<EditUser />} />
                    </Routes>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
