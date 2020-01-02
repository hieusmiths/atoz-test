import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { yupString, yupEmail } from "../utils/validate/yup";

export default function() {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: yupEmail()
    }),
    handleBlur: e => {
      console.log(e);
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Fragment>
      <h1 className="text-center">Formik and Yup</h1>
      <div className="container mt-5 pb-5">
        <form onSubmit={formik.handleSubmit}>
          <input
            id="firstName"
            name="email"
            type="text"
            {...formik.getFieldProps("email")}
            value={formik.values.email}
          />
          {/* <TextField
                id="filled-basic"
                label="Email"
                name="email"
                variant="filled"
              /> */}
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <div className="mt-3">
            <button type="submit" className="btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
