import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function ViewUser() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    StudentsData()
  }, []);

  let StudentsData = async (id) => {
    try {
      const User = await axios.get(`https://635678619243cf412f856252.mockapi.io/api/users/${id}`)
      setUser(User.data)
    } catch (error) {
      
    }
  }
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Back
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

export default ViewUser