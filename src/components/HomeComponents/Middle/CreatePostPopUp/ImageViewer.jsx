import React, { useRef } from "react";
import EmojiTrigger from "./EmojiTrigger";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { Media } from "../../../../svg/Media";
import { CrossIcon } from "../../../../svg/Cross";

const ImageViewer = ({
  typeText,
  settypeText,
  textRef,
  image,
  setImage,
  setshowMedia,
}) => {
  const chooseFile = useRef(null);

  const handleImageUpload = (e) => {
    const mediaFiles = Array.from(e.target.files);
    mediaFiles.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("Wrong File");
      }

      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImage((allImages) => [...allImages, renderImage.target.result]);
      };
    });
  };
  console.log(image);

  return (
    <>
      <EmojiTrigger
        typeText={typeText}
        settypeText={settypeText}
        textRef={textRef}
        changePart
      />

      <div className="p-2 border border-line_color rounded-xl mb-5">
        <div className="w-full h-80 bg-blur rounded-2xl">
          <input
            type="file"
            name=""
            id=""
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            ref={chooseFile}
            onChange={handleImageUpload}
          />
          {image && image.length ? (
            <div className="relative">
              <div
                onClick={() => chooseFile.current.click()}
                className="absolute top-2 left-2 flex items-center gap-x-3 bg-ash rounded-xl p-2 cursor-pointer"
              >
                <Media />
                <span className="font-gilroyRegular text-sm text-black">
                  Add more
                </span>
              </div>

              <div
                onClick={() => setImage([])}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full cursor-pointer items-center justify-center flex"
              >
                <CrossIcon />
              </div>
              <div
                className={`${
                  image.length === 1
                    ? "overflow-hidden w-full h-full"
                    : image.length === 2
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length === 3
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length === 4
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : image.length >= 5
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                    : "overflow-hidden"
                }`}
              >
                {image.slice(0, 4).map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    className={`object-cover w-full h-full ${
                      image.length === 3
                        ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                        : image.length === 4 &&
                          "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"
                    }`}
                    alt="images"
                  />
                ))}

                {image.length >= 5 && (
                  <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center bottom-16 right-28">
                    <span className="font-gilroySemibold text-base text-black">
                      +{image.length - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative flex items-center justify-center h-full">
              <div
                onClick={() => setshowMedia(false)}
                className="absolute top-2 right-2 cursor-pointer text-text_color"
              >
                <CircleCloseIcon />
              </div>
              <div
                onClick={() => chooseFile.current.click()}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-10 h-10 cursor-pointer bg-gradient-to-bl from-black to-input_color text-white rounded-2xl flex items-center justify-center">
                  <Media />
                </div>
                <div className="mt-3">
                  <p className="font-semibold text-base text-center">
                    Add Photos/Videos
                  </p>
                  <p className="font-semibold text-base text-center">
                    or Drag and Drop
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
