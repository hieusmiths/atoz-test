import * as Yup from "yup";

export function yupString() {
  return Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required");
}

export function yupEmail() {
  return Yup.string()
    .min(15, "Must be 15 characters or less")
    .email("Invalid email address")
    .required("Required");
}
