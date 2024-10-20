import React from "react";
import { Link } from "react-router-dom";

const PasswordChange = () => {
  return (
    <div className="min-w-80 w-[600px] bg-white px-8 py-4 rounded-2xl">
      <h2 className="font-gilroyBold text-xl text-black border-b border-line_color">
        Reset Password
      </h2>
      <p className="font-gilroyMedium text-base text-text_color mt-2">
        How would you like to recieve the hidden code to reset your password?
      </p>
      <div className="mt-4 text-center">
        <div className="w-16 h-16 bg-secondary_bg rounded-full mx-auto"></div>
      </div>
      <div className="flex justify-center items-center gap-x-3  mt-4 ">
        <input type="radio" defaultChecked={true} />
        <span className="font-gilroyRegular text-base text-text_color">
          Hello@dummy.com
        </span>
      </div>
      <div className="text-center space-x-3 mt-2 border-t border-line_color">
        <button className="bg-transDark p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-line_color">
          Continue
        </button>

        <Link to="/login">
          <button className="bg-secondary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-line_color">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordChange;
