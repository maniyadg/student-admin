import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Assign() {
  const formik = useFormik({
    initialValues: {
      TeacherId: "",
      Subject: "",

    },
    onSubmit : async(values) => {
      let teacher = await axios.post('https://635678619243cf412f856252.mockapi.io/api/users',values)
        const result = window.confirm('if you want to Assign')
        if(result){
            alert("Assigned")
        }
    }
  })
  return (
    <div className="container">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Assign Teacher to Student</h1>
        <Link
          to={"/User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Back
        </Link>
      </div>
<form onSubmit={formik.onSubmit} >
<div className="row">
        <div className="col-lg-6 form-group">
          <label>Teacher ID</label>
          <input type={"text"} className="form-control" />
          <button  className="btn btn-primary mt-2 ">Submit</button>
        </div>
      </div>
</form>
    </div>
  );
}

export default Assign;
