import React, { useState } from "react";
import { Moon } from "../../../../svg/Moon";
import { Logout } from "../../../../svg/Logout";
import DisplayMode from "./DisplayMode";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../../features/users/authSlice";
import { useNavigate } from "react-router-dom";

const SettingsPart = () => {
  const [mode, setmode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (mode) {
    return <DisplayMode setmode={setmode} />;
  }

  let logOutBtn = () => {
    localStorage.removeItem("user");
    dispatch(userLoggedOut());
    navigate("/login");
  };

  return (
    <div className="bg-white w-72 rounded-2xl shadow-md p-4">
      <ul>
        <li
          className="flex items-center gap-x-2 group cursor-pointer mb-5"
          onClick={() => setmode(true)}
        >
          <div className="w-10 h-10 rounded-2xl bg-line_color flex items-center justify-center group-hover:bg-hover_color group-hover:text-blueTeal transition-all ease-linear duration-100">
            <Moon />
          </div>
          <div>
            <p className="font-gilroySemibold text-base text-black group-hover:text-blueTeal transition-all ease-linear duration-100">
              Display & Accessability
            </p>
          </div>
        </li>
        <li
          onClick={logOutBtn}
          className="flex items-center gap-x-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-line_color flex items-center justify-center group-hover:bg-hover_color group-hover:text-blueTeal transition-all ease-linear duration-100">
            <Logout />
          </div>
          <div>
            <p className="font-gilroySemibold text-base text-black group-hover:text-blueTeal transition-all ease-linear duration-100">
              Logout
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SettingsPart;
