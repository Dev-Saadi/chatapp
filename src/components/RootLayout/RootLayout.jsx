import React from "react";
import { Outlet } from "react-router-dom";
import LeftPArt from "../HomeComponents/LeftPart/LeftPArt";
import Heading from "../HomeComponents/Middle/Header/Heading";
import RightPart from "../HomeComponents/RightPart/RightPart";

const RootLayout = () => {
  return (
    <div className="mx-5 3xl:mx-20 grid grid-cols-1 lg:grid-cols-[70px,1fr] xl:grid-cols-[100px,3fr,1fr] 2xl:grid-cols-[1fr,3fr,1fr] mt-5 xl:mt-10 gap-x-14 ">
      <div className="hidden lg:block">
        <LeftPArt />
      </div>
      <div>
        <div>
          <Heading />
        </div>
        <Outlet />
      </div>
      <div className="hidden xl:block">
        <RightPart />
      </div>
    </div>
  );
};

export default RootLayout;
