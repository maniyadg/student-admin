import React from 'react'
import { Link } from 'react-router-dom'

function EditUser() {
  return (
    <div className='container'>
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Back
        </Link>
      </div>
        <div className='row'>
            <div className='col-lg-6 form-group'>
                <label >Username</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-6 form-group'>
                <label >Email</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Country</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >State</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >City</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Date of Birth</label>
                <input type={'date'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Phone no</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label>Gender</label>
                <select className='form-control'>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <button className='btn btn-primary '>Update</button>
            </div>
        </div>
    </div>
  )
}

export default EditUser