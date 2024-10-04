import React from "react";

export const LeftAuth = ({ title, description, icon }) => {
  return (
    <div>
      <div className="lg:w-[350px] grid justify-center">{icon}</div>
      <h1 className="font-gilroyBold text-2xl text-center lg:text-start 2xl:text-5xl 3xl:text-6xl text-secondary_bg">
        {title}
      </h1>
      <p className="font-gilroyRegular text-base p-2 lg:p-0 text-center lg:text-start 2xl:text-lg text-primary_color mt-3">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;
