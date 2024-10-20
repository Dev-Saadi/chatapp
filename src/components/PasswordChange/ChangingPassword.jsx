import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { newPassword } from "../../validation/validate";

const ChangingPassword = () => {
  const initialState = {
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: newPassword,
    onSubmit: () => {
      console.log("submitted");
    },
  });

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
