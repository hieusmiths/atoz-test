import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import SimpleBottomNavigation from "../component/nav-bar/SimpleBottomNavigation";
import { yupString, yupEmail } from "../utils/validate/yup";
import DemoResolve from "./DemoResolve";
import FormikDemo from "./Formik";
import HttpDemo from "./HttpDemo";

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
    <Router>
      <div className="text-center mt-5">
        <SimpleBottomNavigation />
      </div>
      <div className="px-5">
        <Switch>
          <Route exact path="/resolve-webpack" component={DemoResolve} />
          <Route exact path="/formik" component={FormikDemo} />
        </Switch>
      </div>
      <div>
        <HttpDemo />
      </div>
    </Router>
  );
}
