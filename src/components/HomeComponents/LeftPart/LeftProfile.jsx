import React from "react";

const LeftProfile = () => {
  return (
    <>
      <div className="w-16 h-16 xl:w-24 xl:h-24 2xl:w-24 2xl:h-24 rounded-full bg-input_color mx-auto"></div>
      <div className="text-center mt-3 hidden 2xl:block">
        <h1 className="font-gilroyBold text-lg text-black">Obaidul</h1>
        <h4 className="font-gilroyRegular text-base text-secondary_bg">
          Jhaura@spy.com
        </h4>
      </div>
    </>
  );
};

export default LeftProfile;
