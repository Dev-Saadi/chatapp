import React from "react";
import { Link } from "react-router-dom";
import { ReduceText } from "../../../functions/ReduceText";

const RightFriends = () => {
  const originalName = "Dummy Name Lorem ipsum dolores ismet tarokili";
  const reducedName = ReduceText(originalName, 10);
  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h4 className="font-gilroyBold text-lg text-black">Friend Request</h4>
        </div>
        <div>
          <Link
            to="/friends"
            className="text-sm font-gilroyMedium  hover:bg-blueTeal hover:text-white py-2 px-4 text-black bg-input_color rounded-tr-xl rounded-bl-xl transition-all ease-in-out duration-200"
          >
            See All
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-3 mb-4">
        <div className="flex items-center gap-x-3 w-3/6">
          <div className="w-12 h-12 bg-secondary_bg rounded-full"></div>
          <div className="w-[65%]">
            <h5 className="font-gilroyBold text-sm text-black leading-none">
              {reducedName}
            </h5>
            <span className="font-gilroyMedium text-xs text-secondary_bg">
              2 Hours ago
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-3/6">
          <button className="px-4 py-1.5 bg-secondary_color rounded-full text-white font-gilroyRegular text-sm">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-red rounded-full text-white font-gilroyRegular text-sm">
            Reject
          </button>
        </div>
      </div>
      {/* Space */}
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-3 w-3/6">
          <div className="w-12 h-12 bg-secondary_bg rounded-full"></div>
          <div className="w-[65%]">
            <h5 className="font-gilroyBold text-sm text-black leading-none">
              {reducedName}
            </h5>
            <span className="font-gilroyMedium text-xs text-secondary_bg">
              2 Hours ago
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-3/6">
          <button className="px-4 py-1.5 bg-secondary_color rounded-full text-white font-gilroyRegular text-sm">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-red rounded-full text-white font-gilroyRegular text-sm">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightFriends;
