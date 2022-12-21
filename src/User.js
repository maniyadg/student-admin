import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    StudentsData()
  }, []);

let StudentsData = async () => {
  try {
    const User = await axios.get("https://635678619243cf412f856252.mockapi.io/api/users")
    setUser(User.data)
  } catch (error) {
    
  }
}


let deleteUser = async(id) => { 
  try {
    const deleteData = await axios.delete(`https://635678619243cf412f856252.mockapi.io/api/users/${id}`)
    const result = window.confirm('if you want to delete')
    if(result){
        alert("deleted")
    }
    StudentsData()
  } catch (error) {
    alert("error")
  }

}
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/Create_User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city </th>
                  <th>Date of Birth</th>
                  <th>phone no</th>
                  <th>gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city </th>
                  <th>Date of Birth</th>
                  <th>phone no</th>
                  <th>gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {User.map((User) => {
                  return (
                    <tr>
                      <td>{User.id}</td>
                      <td>{User.name}</td>
                      <td>{User.email}</td>
                      <td>{User.country}</td>
                      <td>{User.state}</td>
                      <td>{User.city}</td>
                      <td>{User.Dateofbirth}</td>
                      <td>{User.phoneno}</td>
                      <td>{User.gender}</td>
                      <td>
                        <Link  to={`/User/${User.id}`} className="btn btn-warning mr-1">View</Link>
                        <Link  to={`/Edit_User/${User.id}`}  className="btn btn-primary mr-1">Edit</Link>
                        <Link to={`/Assign/${User.id}`} className="btn btn-success mr-1">Assign</Link>
                        <button onClick={()=>deleteUser(User.id)} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
