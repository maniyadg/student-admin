import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teachers() {
  const [Teacher, setTeacher] = useState([]);
  useEffect(() => {
    teachersData()
  }, []);


  let teachersData = async () => {
    try {
      const User = await axios.get("https://635678619243cf412f856252.mockapi.io/api/Teachers")
      setTeacher(User.data)
    } catch (error) {
      
    }
  }

  let deleteUser = () => {
    const result = window.confirm("if you want to delete");
    if (result) {
      alert("deleted");
    }
  };
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Teachers</h1>
        <Link
          to={"/Create_Teacher"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create Teacher
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Teacher's List</h6>
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
                  <th>Subject</th>
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
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {Teacher.map((Teacher) => {
                  return (
                    <tr>
                      <td>{Teacher.id}</td>
                      <td>{Teacher.name}</td>
                      <td>{Teacher.email}</td>
                      <td>{Teacher.country}</td>
                      <td>{Teacher.state}</td>
                      <td>{Teacher.city}</td>
                      <td>{Teacher.Dateofbirth}</td>
                      <td>{Teacher.phoneno}</td>
                      <td>{Teacher.gender}</td>
                      <td>{Teacher.subject}</td>
                      <td>
                        <Link
                          to={`/Teacher/${Teacher.id}`}
                          className="btn btn-warning mr-1"
                        >
                          View
                        </Link>
                        <Link
                          to={`/Edit_User/${Teacher.id}`}
                          className="btn btn-primary mr-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser()}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
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

export default Teachers;
