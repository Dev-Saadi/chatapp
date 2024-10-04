import * as Yup from "yup";

export const signUp = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(15)
    .required("Please enter Your First Name"),

  lastName: Yup.string().min(3).max(15).required("Please enter your last name"),

  email: Yup.string().email().required("Please enter a valid email"),

  password: Yup.string().min(8).required("Please enter a strong password"),

  gender: Yup.string().required("Please select your gender"),
});

export const logIn = Yup.object({
  email: Yup.string().email().required("Please enter a your email"),

  password: Yup.string().min(8).required("Please enter a correct password"),
});
