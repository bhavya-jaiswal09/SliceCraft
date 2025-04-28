import * as yup from "yup"

export const validationLogin = yup.object().shape({
  email: yup.string().email("Invalid email address").required("This field is required"),
  password: yup.string().min(6).required("This field is required"),
})

export const validationRegister = yup.object().shape({
  firstName: yup.string().min(2, "Name must have at least 2 characters").required("This field is required"),
  lastName: yup.string().min(2, "Name must have at least 2 characters").required("This field is required"),
  address: yup.string().min(2, "Address must have at least 2 characters").required("This field is required"),
  email: yup.string().email("Invalid email address").required("This field is required"),
  password: yup.string().min(6, "A password deve ter 6 caracteres no mínimo").required("This field is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match"),
  phone: yup.string().matches(
    /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
    "Invalid Phone"
  ).required("This field is required")
})
export const validationProfile = yup.object().shape({
  image: yup.string().min(1).optional(),
  fullName: yup.string().min(5, "Name must have at least 5 characters").required("This field is required"),
  address: yup.string().min(2, "Address must have at least 2 characters").required("This field is required"),
  email: yup.string().email("Invalid email address").required("This field is required"),
  password: yup.string().min(6, "A password deve ter 6 caracteres no mínimo").required("This field is required"),
  phone: yup.string().matches(
    /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
    "Invalid Phone"
  ).required("This field is required")
})