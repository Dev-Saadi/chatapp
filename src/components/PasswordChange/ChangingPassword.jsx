import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { newPassword } from "../../validation/validate";
import { useChangePasswordMutation } from "../../features/apiRTKQuery/authApi";

const ChangingPassword = ({
  user,
  setSuccess,
  success,
  setLoading,
  setError,
  error,
}) => {
  const [changePassword] = useChangePasswordMutation();

  const navigate = useNavigate();

  const initialState = {
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: newPassword,
    onSubmit: () => {
      changePreviousPassword();
    },
  });

  const changePreviousPassword = async () => {
    try {
      setLoading(true);
      let result = await changePassword({
        email: user.email,
        password: formik.values.password,
      }).unwrap();
      setSuccess(result.message);
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.data.message);
    }
  };

  let { errors, touched } = formik;

  return (
    <div className="min-w-80 w-[520px] bg-white px-8 py-4 rounded-2xl">
      <h2 className="font-gilroyBold text-xl text-black border-b border-line_color">
        New Password
      </h2>
      <p className="font-gilroyMedium text-base text-text_color mt-2">
        Enter your new password.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <input
          placeholder="New password"
          className="w-full p-3 mt-5 rounded-xl border border-solid border-line_color font-gilroyRegular text-sm focus:outline-none mb-3"
          type="password"
          name="password"
          autoComplete="off"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        {errors.password && touched.password && (
          <p className="text-red text-sm font-gilroyRegular">
            {errors.password}
          </p>
        )}

        {success && (
          <p className="text-green text-sm font-gilroyRegular">{success}</p>
        )}

        {error && (
          <p className="text-green text-sm font-gilroyRegular">{error}</p>
        )}

        <div className="w-full h-[1px] bg-line_color mt-2"></div>
        <Link to="/login">
          <button className="bg-title_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-text_color mr-3">
            Cancel
          </button>
        </Link>

        <button
          type="submit"
          className="bg-secondary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-line_color"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangingPassword;
