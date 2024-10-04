import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsPart from "./SettingOptions/SettingsPart";
import OutSideClick from "../../../functions/click";

const LeftHomeData = ({ data }) => {
  let [dropshow, setdropshow] = useState(false);
  const clickOutside = useRef(null);
  const ItemIcon = data.icon;

  OutSideClick(clickOutside, () => {
    setdropshow(false);
  });

  const settingsDropdown = data.title === "Settings" && (
    <>
      <div className="relative">
        <div
          to={data.to}
          className={`flex w-9 h-9 2xl:w-auto 2xl:h-auto justify-center 2xl:justify-normal items-center 2xl:py-3 2xl:gap-x-3 2xl:mb-7 2xl:px-6 rounded-2xl hover:bg-hover_color cursor-pointer group transition-all ease-linear duration-100 ${
            dropshow && "bg-hover_color"
          }`}
          onClick={() => setdropshow(true)}
        >
          <div
            className={`group-hover:text-blueTeal transition-all ease-linear duration-100 ${
              dropshow && "text-blueTeal"
            }`}
          >
            <ItemIcon />
          </div>

          <div className="hidden 2xl:block">
            <p
              className={`font-gilroySemibold 3xl:text-lg text-black group-hover:text-blueTeal transition-all ease-linear duration-100 ${
                dropshow && "text-blueTeal"
              }`}
            >
              {data.title}
            </p>
          </div>
        </div>
        <div
          className="absolute 2xl:top-16 lg:left-0 top-12 -left-44"
          ref={clickOutside}
        >
          {dropshow && <SettingsPart />}
        </div>
      </div>
    </>
  );
  return (
    <>
      {settingsDropdown ? (
        settingsDropdown
      ) : (
        <NavLink
          to={data.to}
          className="flex w-9 h-9 2xl:w-auto 2xl:h-auto justify-center 2xl:justify-normal items-center 2xl:gap-x-3 lg:mb-5 2xl:mb-7 2xl:py-3 2xl:px-6 rounded-2xl hover:bg-hover_color cursor-pointer group transition-all ease-linear duration-100"
        >
          <div className="group-hover:text-blueTeal transition-all ease-linear duration-100">
            <ItemIcon />
          </div>

          <div className="hidden 2xl:block">
            <p className="font-gilroySemibold 3xl:text-lg text-black group-hover:text-blueTeal transition-all ease-linear duration-100">
              {data.title}
            </p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
