import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { findUser } from "../../validation/validate";

const FindAccount = () => {
  const initialState = {
    email: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: findUser,
    onSubmit: () => {
      console.log("submitted");
    },
  });

  let { errors, touched } = formik;
  return (
    <div className="min-w-80 w-[520px] bg-white px-8 py-4 rounded-2xl">
      <h2 className="font-gilroyBold text-xl text-black border-b border-line_color">
        Search Your Account
      </h2>
      <p className="font-gilroyMedium text-base text-text_color mt-2">
        Please enter your email address or mobile number to find your account.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <input
          placeholder="email or phone number"
          className="w-full p-3 mt-5 rounded-xl border border-solid border-line_color font-gilroyRegular text-sm focus:outline-none mb-3"
          type="email"
          name="email"
          autoComplete="off"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {errors.email && touched.email && (
          <p className="text-red text-sm font-gilroyRegular">{errors.email}</p>
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
          Search
        </button>
      </form>
    </div>
  );
};

export default FindAccount;
