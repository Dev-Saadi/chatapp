import React, { useEffect, useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";

import AddPost from "./AddPost";

import EmojiTrigger from "./EmojiTrigger";
import ImageViewer from "./ImageViewer";

const CreatePost = () => {
  const [typeText, settypeText] = useState("");
  const [showMedia, setshowMedia] = useState(false);
  const [image, setImage] = useState([]);

  const textRef = useRef(null);

  return (
    <div className="absolute left-0 top-0 w-full bg-blur h-screen z-20 flex justify-center items-center">
      <div className=" w-[30%] bg-white shadow-md rounded-2xl">
        <div className="flex justify-between items-center border-b border-line_color p-4">
          <h3 className="font-gilroySemibold text-lg text-black ">
            Create Post
          </h3>
          <div className="text-primary_bg cursor-pointer">
            <CircleCloseIcon />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full bg-red"></div>
            <h4 className="font-gilroySemibold text-black text-base">
              Your Name
            </h4>
          </div>

          {!showMedia ? (
            <>
              <EmojiTrigger
                typeText={typeText}
                settypeText={settypeText}
                textRef={textRef}
              />
            </>
          ) : (
            <>
              <ImageViewer
                typeText={typeText}
                settypeText={settypeText}
                textRef={textRef}
                image={image}
                setImage={setImage}
                setshowMedia={setshowMedia}
              />
            </>
          )}
          <div>
            <AddPost setshowMedia={setshowMedia} showMedia={showMedia} />
          </div>

          <div className="mt-3">
            <button className="w-full bg-text_color p-2 rounded-xl hover:bg-black hover:text-white transition-all ease-in-out duration-100 font-gilroySemibold text-line_color text-base">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
