import React from "react";

const DateofBirth = ({ formik, years, month, getDates, ageError }) => {
  return (
    <>
      <div className="flex gap-x-1 lg:gap-x-7">
        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="birthYear"
          value={formik.values.birthYear}
          className="border w-[30%] border-line_color font-gilroyRegular p-2 rounded-md focus:outline-none"
        >
          <option>Year</option>
          {years.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        {/* Month */}

        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="birthMonth"
          value={formik.values.birthMonth}
          className="border w-[30%] border-line_color font-gilroyRegular p-2 rounded-md focus:outline-none"
        >
          <option>Month</option>

          {month.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        {/* Day */}

        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="birthDay"
          value={formik.values.birthDay}
          className="border w-[30%] border-line_color font-gilroyRegular p-2 rounded-md focus:outline-none"
        >
          <option>Day</option>
          {getDates.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>

      {ageError && (
        <p className="font-gilroyRegular text-red text-sm my-2">{ageError}</p>
      )}
    </>
  );
};

export default DateofBirth;
