import React from "react";
import { StoryData } from "./StoryData";
import { Swiper, SwiperSlide } from "swiper/react";

const AllStories = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="font-gilroyBold text-lg text-black">Stories</h4>
      </div>

      <div className="w-[330px]">
        <Swiper spaceBetween={10} slidesPerView={3}>
          {StoryData.map((data, index) => (
            <SwiperSlide
              key={index}
              style={{ background: `url(${data.bgPicture})` }}
              className="bg-cover bg-no-repeat bg-center h-52 rounded-2xl"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-input_color">
                <img src={data.picture} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex items-center gap-x-2">
        {StoryData.slice(0, 3).map((data, index) => (
          <div
            key={index}
            style={{ background: `url(${data.bgPicture})` }}
            className="bg-cover bg-no-repeat bg-center w-[33%] h-52 rounded-2xl"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-input_color">
              <img src={data.picture} />
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default AllStories;
