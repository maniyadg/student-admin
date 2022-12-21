import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import Createuser from "./Createuser";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Css/sb-admin-2.css';
import './Css/fontawesome-free/css/all.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import CreateTeacher from "./CreateTeacher";
import Teachers from "./Teachers";
import Assign from "./Assign";


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar />
        <div class="container-fluid">
        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/User' element={<User/>}></Route>
          <Route path='/Create_User' element={<Createuser/>}></Route>
          <Route path='/User/:id' element={<ViewUser/>}></Route>
          <Route path='/Assign/:id' element={<Assign/>}></Route>
          <Route path='/Edit_User/:id' element={<EditUser/>}></Route>
          <Route path='/Teachers' element={<Teachers/>}></Route>
          <Route path='/Create_Teacher' element={<CreateTeacher/>}></Route>

        </Routes>
      </div>
      </div>
      </div>

    </div>
    </BrowserRouter>
      );
}

export default App;
