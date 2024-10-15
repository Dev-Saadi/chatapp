import React from "react";
import { HashLoader } from "react-spinners";

const Activation = ({ type, text, head, loading }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-transDark z-10 flex justify-center items-center">
        <div className="w-96 bg-white p-4 text-center shadow-lg">
          <h3 className="font-gilroyMedium text-green text-lg">{head}</h3>
          <h5 className="font-gilroyRegular text-lg mt-5">{text}</h5>
          <HashLoader
            loading={loading}
            size={30}
            color="#83b4ff"
            className="m-auto mt-2 "
          />
        </div>
      </div>
    </>
  );
};

export default Activation;
