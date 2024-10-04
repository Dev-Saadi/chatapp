import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "../../validation/validate";
import DateofBirth from "./DateofBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../features/apiRTKQuery/authApi";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthYear: new Date().getFullYear(),
  birthMonth: new Date().getMonth() + 1,
  birthDay: new Date().getDate(),
  gender: "",
};

const RegistrationForm = ({ toast }) => {
  let [ageError, setAgeError] = useState("");
  let [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const registration = async () => {
    const signUpMutation = await addUser({
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      password: formik.values.password,
      birthYear: formik.values.birthYear,
      birthMonth: formik.values.birthMonth,
      birthDay: formik.values.birthDay,
      gender: formik.values.gender,
    });

    if (signUpMutation?.data) {
      toast.success(signUpMutation?.data?.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (signUpMutation?.error) {
      toast.error(signUpMutation?.error?.data?.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });
    }
  };

  const formik = useFormik({
    initialValues: initialState,

    validationSchema: signUp,

    onSubmit: () => {
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.birthYear,
        formik.values.birthMonth - 1,
        formik.values.birthDay
      );
      const adult = new Date(1970 + 18, 0, 1);
      const old = new Date(1970 + 70, 0, 1);
      if (currentDate - picked_Date < adult) {
        return setAgeError("You are under 18 years old");
      } else if (currentDate - picked_Date > old) {
        return setAgeError("You are above 70 years old");
      }

      registration();

      // formik.resetForm();

      console.log("submitted");
      // setAgeError("");
    },
  });

  // Dynamic Year Values for FrontEnd

  const tempYears = new Date().getFullYear();

  const years = Array.from(
    new Array(100),
    (values, index) => tempYears - index
  );

  // Dynamic Month Values for FrontEnd

  const month = Array.from(new Array(12), (value, index) => 1 + index);

  // Dynamic Date Values including Leap Year for FrontEnd

  const day = () => {
    return new Date(
      formik.values.birthYear,
      formik.values.birthMonth,
      0
    ).getDate();
  };

  const getDates = Array.from(new Array(day()), (val, index) => 1 + index);

  const { errors, touched } = formik;

  return (
    <div className="w-full rounded-md shadow-md p-4 lg:px-12 lg:py-7 mt-4 lg-mt-0 box-border border border-line_color lg:border-none">
      <div>
        {/* First Name */}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className={
              errors.firstName && touched.firstName
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none mb-5"
            }
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            name="firstName"
            value={formik.values.firstName}
          />

          {errors.firstName && touched.firstName && (
            <p className="font-gilroyRegular text-red text-sm my-2">
              {errors.firstName}
            </p>
          )}

          {/* Last Name */}
          <input
            type="text"
            className={
              errors.lastName && touched.lastName
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none mb-5"
            }
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            name="lastName"
            value={formik.values.lastName}
          />
          {errors.lastName && touched.lastName && (
            <p className="font-gilroyRegular text-red text-sm my-2">
              {errors.lastName}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            className={
              errors.email && touched.email
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none mb-5"
            }
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            name="email"
            value={formik.values.email}
          />
          {errors.email && touched.email && (
            <p className="font-gilroyRegular text-red text-sm my-2">
              {errors.email}
            </p>
          )}

          {/* Password */}
          <input
            type="password"
            className={
              errors.password && touched.password
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none mb-5"
            }
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            name="password"
            value={formik.values.password}
          />
          {errors.password && touched.password && (
            <p className="font-gilroyRegular text-red text-sm my-2">
              {errors.password}
            </p>
          )}

          {/* Years Month Day */}

          <DateofBirth
            formik={formik}
            years={years}
            month={month}
            getDates={getDates}
            ageError={ageError}
          />

          {/* Gender */}

          <Gender formik={formik} errors={errors} touched={touched} />

          {/* SignUp Button */}

          <div className="sm:flex mt-4  justify-between items-center">
            <button
              className="px-6 py-2 bg-blueTeal transition-all ease-in-out duration-200 hover:bg-line_color hover:text-black rounded-full text-white font-gilroyMedium"
              type="submit"
            >
              Sign Up
            </button>

            <p className="font-semibold text-base  2xl:text-base xl:text-sm mt-4 sm:mt-0">
              Already Have An account ?{" "}
              <Link className="text-secondary_bg underline" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
