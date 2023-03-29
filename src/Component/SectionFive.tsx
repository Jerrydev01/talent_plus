import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../utils/revies";
import { ReviewProps } from "../utils/revies";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const SectionFive = () => {
  return (
    <section>
      <article className="lg:pt-[80px] pt-[0px] container_padding">
        <div className="grid place-items-center">
          <h2 className="lg:text-[56px] text-[24px] text-center lg:text-left font-bold capitalize mt-[40px] lg:mt-[0px] lg:leading-[68.88px]">
            what our clients are saying
          </h2>
          <p className=" pt-[16px] pb-[32px] text-neutralColor text-center capitalize lg:w-[55%]">
            high-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            // swiper breakpoints
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
              },
              // when window width is >= 640px
              1030: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <>
              {reviews.map((item: ReviewProps) => {
                return (
                  <SwiperSlide>
                    <div className="bg-white px-[24px] pt-[40px] pb-[32px] lg:rounded-[24px] rounded-[16px] mb-[4rem] capitalize">
                      <p className="text-neutralColor lg:text-[14px]">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3 pt-[20px]">
                        <img
                          src={item.reviewImg}
                          alt={item.name}
                          className=""
                        />
                        <div className="flex flex-col gap-1">
                          <small className="text-[14px] font-bold">
                            {item.name}
                          </small>
                          <small className="text-[12px] text-neutralColor">
                            {item.position}
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default SectionFive;
