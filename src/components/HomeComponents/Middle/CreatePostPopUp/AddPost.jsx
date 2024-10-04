import React from "react";
import { Media } from "../../../../svg/Media";
import { LiveIcon } from "../../../../svg/Live";
import { Profile } from "../../../../svg/Profile";

const AddPost = ({ setshowMedia, showMedia }) => {
  return (
    <div className="px-2 py-1 mt-2 border border-line_color rounded-xl flex justify-between items-center">
      <span className="font-gilroySemibold text-black text-base">
        Add to your Post
      </span>
      <div className="flex items-center gap-x-2">
        <div
          onClick={() => setshowMedia(true)}
          className={`w-10 h-10 cursor-pointer transition-all ease-linear duration-100 hover:bg-title_color rounded-2xl flex items-center justify-center ${
            showMedia && "w-10 h-10 bg-title_color"
          }`}
        >
          <Media />
        </div>
        <div className="w-10 h-10 cursor-pointer transition-all ease-linear duration-100 hover:bg-title_color rounded-2xl flex items-center justify-center">
          <LiveIcon />
        </div>
        <div className="w-10 h-10 cursor-pointer transition-all ease-linear duration-100 hover:bg-title_color rounded-2xl flex items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
