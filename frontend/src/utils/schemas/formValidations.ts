import * as yup from "yup";

export const validationLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup.string().min(6).required("This field is required"),
});

export const validationRegister = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  lastName: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  address: yup
    .string()
    .min(2, "Address must be at least 2 characters")
    .required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
  phone: yup
    .string()
    .matches(
      /^[6-9]\d{9}$/,
      "Invalid Phone (e.g. 9876543210)"
    )
    .required("This field is required"),
});
export const validationProfile = yup.object().shape({
  image: yup.string().min(1).optional(),
  fullName: yup
    .string()
    .min(5, "Name must be at least 5 characters")
    .required("This field is required"),
  address: yup
    .string()
    .min(2, "Address must be at least 2 characters")
    .required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
  phone: yup
    .string()
    .matches(
      /^[6-9]\d{9}$/,
      "Invalid Phone (e.g. 9876543210)"
    )
    .required("This field is required"),
});

export const validationEditCartItem = yup.object().shape({
  size: yup.string(),
  border: yup.bool(),
  quantity: yup
    .number()
    .min(1, "Value must be greater than or equal to 1")
    .required("This field is required"),
});

export const validationPizza = yup.object().shape({
  flavor: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("This field is required"),
  type: yup
    .string()
    .min(2, "Type must be at least 2 characters")
    .required("This field is required"),
  price: yup
    .number()
    .min(1, "Price must be greater than or equal to 1")
    .required("This field is required"),
  ingredients: yup
    .array(yup.string())
    .required("This field is required"),
  img: yup.string().required("This field is required"),
});

export const validationFieldIngredient = yup.string().matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/, 'Ingredient name must contain only letters')

