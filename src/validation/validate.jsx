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

export const findUser = Yup.object({
  email: Yup.string().email().required("Please enter your email address"),
});

export const userCode = Yup.object({
  code: Yup.string()
    .min("5", "Code must be 5 characters")
    .max("5", "Code must be 5 characters")
    .required("Please enter your verification code"),
});

export const newPassword = Yup.object({
  password: Yup.string().min(8).required("Please enter your new password"),
});
