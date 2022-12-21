import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Createuser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phoneno: "",
      Dateofbirth: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Please Enter Your Name";
      }
      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = " Username must be between 3 to 15";
      }
      if (!values.email) {
        error.email = "Please Enter Your E-Mail";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Inavlid E-Mail";
      }
      if (!values.phoneno) {
        error.phoneno = "Please Enter Your Phone Number";
      }
      if (
        values.phoneno &&
        (values.phoneno.length !== 10 ||
          !/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(
            values.phoneno
          ))
      ) {
        error.phoneno = "Invalid Phone Number";
      }
//  console.log(values.Dateofbirth.split("-"))
let age = new Date().getFullYear()- (values.Dateofbirth.split("-")[0])
// console.log(age)
if(age<18){
  error.Dateofbirth="You must be above 18"
}

      return error;
    },
    onSubmit: async (values) => {
      try {
        const userData = await axios.post(
          "https://635678619243cf412f856252.mockapi.io/api/users",
          values
        );
        alert("User Added");
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <div className="container">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User</h1>
        <Link
          to={"/User"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Back
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 form-group">
            <label>Username</label>
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type={"text"}
              className={`form-control ${
                formik.touched.name &&  formik.errors.name ? "error-box" : ""
              } ${
                formik.touched.name && !formik.errors.name ? "success-box" : ""
              }`}
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-6 form-group">
            <label>Email</label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type={"text"}
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "error-box" : ""
              } ${
                formik.touched.email && !formik.errors.email
                  ? "success-box"
                  : ""
              }`}
            />
            {formik.errors.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="col-lg-4 form-group">
            <label>Country</label>
            <select
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
              className="form-control"
            >
              <option>India</option>
              <option>America</option>
              <option>China</option>
            </select>
          </div>
          <div className="col-lg-4 form-group">
            <label>State</label>
            <select
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              className="form-control"
            >
              <option>India</option>
              <option>America</option>
              <option>China</option>
            </select>
          </div>
          <div className="col-lg-4 form-group">
            <label>City</label>
            <select
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              className="form-control"
            >
              <option>India</option>
              <option>America</option>
              <option>China</option>
            </select>
          </div>
          <div className="col-lg-4 form-group">
            <label>Date of Birth</label>
            <input
              name="Dateofbirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Dateofbirth}
              type={"date"}
              className={`form-control ${
                formik.touched.Dateofbirth &&formik.errors.Dateofbirth ? "error-box" : ""
              } ${
                formik.touched.Dateofbirth && !formik.errors.Dateofbirth
                  ? "success-box"
                  : ""
              }`}
            />
            {formik.errors.Dateofbirth ? (
              <span style={{ color: "red" }}>{formik.errors.Dateofbirth}</span>
            ) : null}
          </div>
          <div className="col-lg-4 form-group">
            <label>Phone no</label>
            <input
              name="phoneno"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneno}
              type={"text"}
              className={`form-control ${
                formik.touched.phoneno && formik.errors.phoneno ? "error-box" : ""
              } ${
                formik.touched.phoneno && !formik.errors.phoneno
                  ? "success-box"
                  : ""
              }`}
            />
            {formik.errors.phoneno ? (
              <span style={{ color: "red" }}>{formik.errors.phoneno}</span>
            ) : null}
          </div>
          <div className="col-lg-4 form-group">
            <label>Gender</label>
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-lg-4 form-group">
            <button className="btn btn-primary ">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
