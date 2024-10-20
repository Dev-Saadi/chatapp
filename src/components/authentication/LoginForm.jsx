import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../validation/validate";
import { useLoggedInUserMutation } from "../../features/apiRTKQuery/authApi";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/users/authSlice";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({ toast }) => {
  const [loggedInUser, { isLoading }] = useLoggedInUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async () => {
    const loginMutation = await loggedInUser({
      email: formik.values.email,
      password: formik.values.password,
    });
    if (loginMutation?.error) {
      toast.error(loginMutation?.error?.data?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });
      return;
    }
    const { message, ...rest } = loginMutation.data;
    localStorage.setItem("user", JSON.stringify(rest));
    dispatch(userLoggedIn(rest));
    navigate("/");
  };

  const formik = useFormik({
    initialValues: initialState,

    validationSchema: logIn,

    onSubmit: () => {
      loginUser();
    },
  });

  const { errors, touched } = formik;

  return (
    <>
      <div className="w-full rounded-md shadow-md p-4 lg:px-12 lg:py-7 mt-4 lg-mt-0 box-border border border-line_color lg:border-none">
        <div>
          {/* First Name */}
          <form onSubmit={formik.handleSubmit}>
            {/* Last Name */}

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

            {/* Gender */}

            {/* SignUp Button */}

            <div className="sm:flex mt-4  justify-between items-center">
              {isLoading ? (
                <button
                  disabled
                  className="px-6 py-2 bg-blueTeal transition-all ease-in-out duration-200 hover:bg-line_color hover:text-black rounded-full text-white font-gilroyMedium"
                  type="submit"
                >
                  <BeatLoader color="#fff" size={8} />
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-blueTeal transition-all ease-in-out duration-200 hover:bg-line_color hover:text-black rounded-full text-white font-gilroyMedium"
                  type="submit"
                >
                  Log In
                </button>
              )}

              <div>
                <p className="font-semibold text-base  2xl:text-base xl:text-sm mt-4 sm:mt-0">
                  Don't gave an account?{" "}
                  <Link
                    className="text-secondary_bg underline"
                    to="/Registration"
                  >
                    Sign Up
                  </Link>
                </p>

                <div className="font-semibold text-base 2xl:text-right  2xl:text-sm xl:text-sm 3xl:mt-3 mt-2 sm:mt-0">
                  <Link
                    target="_"
                    className="text-secondary_bg hover:underline"
                    to="/Reset"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
