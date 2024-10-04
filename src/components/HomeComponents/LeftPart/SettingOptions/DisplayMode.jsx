import React from "react";
import { Moon } from "../../../../svg/Moon";
import { BackIcon } from "../../../../svg/backIcon";

const DisplayMode = ({ setmode }) => {
  return (
    <>
      <div className="bg-white w-72 rounded-2xl shadow-md p-4">
        <div className="flex items-center mb-4 gap-x-4">
          <div
            onClick={() => setmode(false)}
            className="w-10 h-10 rounded-2xl bg-line_color flex items-center justify-center hover:text-blueTeal cursor-pointer transition-all ease-linear duration-100"
          >
            <BackIcon />
          </div>
          <h4 className="font-gilroySemibold text-lg text-black ">
            Display & Accessiblity
          </h4>
        </div>
        <div className="flex justify-between gap-x-4">
          <div className="w-10 h-10 rounded-2xl bg-line_color flex items-center justify-center">
            <Moon />
          </div>
          <div className="w-4/5">
            <h4 className="font-gilroyBold text-base text-black">Dark Mode</h4>
            <p className="font-gilroyRegular text-sm text-text_color">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="font-gilroyMedium text-sm text-black"
                  htmlFor="white"
                >
                  Off
                </label>
                <input id="white" name="darkmode" type="radio" />
              </div>

              <div className="flex items-center justify-between">
                <label
                  className="font-gilroyMedium text-sm text-black"
                  htmlFor="dark"
                >
                  On
                </label>
                <input id="dark" name="darkmode" type="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMode;
