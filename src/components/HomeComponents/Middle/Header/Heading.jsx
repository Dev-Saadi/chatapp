import React, { useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";
import { LeftData } from "../../LeftPart/Data";
import { Link } from "react-router-dom";
import LeftHomeData from "../../LeftPart/LeftHomeData";

const Heading = () => {
  const [searchShow, setSearchShow] = useState(false);
  const clickOutside = useRef(null);

  OutSideClick(clickOutside, () => {
    setSearchShow(false);
  });

  return (
    <div className="flex items-center justify-between">
      <div className="w-[20%]">
        <h4 className="font-gilroyBold text-2xl text-black hidden lg:block">
          Feeds
        </h4>
        <div className="w-12 h-12 rounded-full bg-input_color mx-auto lg:hidden"></div>
      </div>

      <div className="lg:hidden flex gap-x-2 justify-center items-center w-[60%]">
        {LeftData.map((data, index) => (
          <LeftHomeData key={index} data={data} />
        ))}
      </div>

      <div className="w-[20%] lg:w-[30%] relative">
        <div
          onClick={() => setSearchShow(true)}
          className="flex ml-auto lg:ml-0 w-11 h-11 justify-center lg:w-full lg:h-auto items-center gap-x-3 border-secondary_color border lg:py-[10px] lg:px-4 rounded-full"
        >
          <div className="text-secondary_color cursor-pointer">
            <SearchIcon />
          </div>
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none font-gilroyRegular text-base w-full"
            />
          </div>
        </div>
        <div
          className="absolute -top-5 -right-5  4xl:left-[-27px] z-10 "
          ref={clickOutside}
        >
          {searchShow && <SearchBox />}
        </div>
      </div>
    </div>
  );
};

export default Heading;
