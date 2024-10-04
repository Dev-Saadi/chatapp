import React from "react";
import RightFriends from "./RightFriends";
import AllStories from "./Stories/AllStories";

const RightPart = () => {
  return (
    <>
      <div>
        <RightFriends />
      </div>

      <div className="mt-10">
        <AllStories />
      </div>
    </>
  );
};

export default RightPart;
