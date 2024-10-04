import React from "react";
import Heading from "./Header/Heading";
import { LiveIcon } from "../../../svg/Live";
import { Media } from "../../../svg/Media";

const PostHome = () => {
  return (
    <>
      <div className="mt-10 p-6 bg-white rounded-2xl">
        <div className="flex items-center gap-x-3 w-full bg-main_bg p-2 rounded-full mb-6">
          <div className="w-12 h-12 rounded-full bg-red"></div>
          <input
            type="text"
            placeholder="What's on your mind ?"
            className="bg-main_bg focus:outline-none w-[90%]"
          />
        </div>
        <div className="border-t-2 border-line_color">
          <div className="flex gap-x-8 items-center mt-7">
            <div className="flex items-center gap-x-3">
              <LiveIcon />
              <span className="font-gilroyMedium text-black">Live Video</span>
            </div>
            <div className="flex items-center gap-x-3">
              <Media />
              <span className="font-gilroyMedium text-black">
                Image/Gallery
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <LiveIcon />
              <span className="font-gilroyMedium text-black">Activities</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHome;
