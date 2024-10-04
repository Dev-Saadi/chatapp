import React from "react";

const Gender = ({ formik, errors, touched }) => {
  return (
    <>
      <div className="mt-4">
        {/* Male */}

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          id="Male"
          type="radio"
          name="gender"
          value="Male"
        />
        <label className="font-gilroyRegular ml-2" htmlFor="Male">
          Male
        </label>

        {/* Female */}

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          className="ml-5"
          id="Female"
          type="radio"
          name="gender"
          value="Female"
        />
        <label className="font-gilroyRegular ml-2" htmlFor="Female">
          Female
        </label>
      </div>

      {errors.gender && touched.gender && (
        <p className="font-gilroyRegular text-red text-sm my-2">
          {errors.gender}
        </p>
      )}
    </>
  );
};

export default Gender;
