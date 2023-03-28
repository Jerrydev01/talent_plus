import React from "react";
import Hero_image from "../assets/Hero_image.png";
import arrowbend from "../assets/arrownend.svg";
import socials_P from "../assets/socials_r.jpg";
import zoom from "../assets/Zoom.svg";
import stripe from "../assets/stripe.svg";
import monday from "../assets/monday.svg";
import slack from "../assets/slack.svg";
import dropbox from "../assets/Dropbox.svg";



const sponsorImg = [
  {
    img: zoom,
    alt: "zoom",
  },
  {
    img: stripe,
    alt: "stripe",
  },
  {
    img: monday,
    alt: "monday",
  },
  {
    img: slack,
    alt: "slack",
  },
  {
    img: dropbox,
    alt: "dropbox",
  },
];
const HeaderSection = () => {
  return (
    <section className="lg:pt-[5rem] pt-[2.5rem]">
      <section className="bg-[#004DB3]">
        <article className="flex flex-col lg:flex-row items-center bg_head ">
          <div className="container_padding relative">
            <h2 className=" pt-10 text-[#FFFFFF] lg:text-[60px] text-[32px] lg:text-left text-center font-bold">
              Grow your skills to advance your career path
            </h2>
            <p className="text-[#AAC4E6] capitalize lg:text-left text-center">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className="lg:block flex justify-center">
              <div className="flex gap-[20px] font-bold mt-[27px] relative">
                <button className="text-white px-[27px] py-3 rounded-[3.4px] border border-white">
                  get started now
                </button>
                <button className="bg-white px-[27px] py-3 rounded-[3.4px] text-primaryColor">
                  {" "}
                  enroll now
                </button>
                <img
                  className="absolute right-0 translate-x-[10rem] -translate-y-[5.5rem] hidden lg:block"
                  src={arrowbend}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="lg:block flex justify-center">
              <div className="mt-[20px] text-white flex items-center gap-[7px]">
                <img
                  className="lg:w-[180px] w-[120px]"
                  src={socials_P}
                  alt="people socials"
                />
                <div className="flex flex-col">
                  <span className="font-bold lg:text-[24px] text-[16px] leading-0">
                    255k+
                  </span>
                  <span className="">Previews</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className="aspect-[1/1] lg:w-[50%] object-contain lg:pr-[50px]"
            src={Hero_image}
            alt="Hero image"
          />
        </article>
      </section>
      <section className="bg-[#CCDBF0] lg:py-[60px] py-[20px] grid ">
        <div className="flex justify-center lg:gap-[73px] gap-6">
          {sponsorImg.map((item, index) => {
            return (
              <img
                key={index}
                className="lg:w-[129px] w-[40px] h-[29px] object-contain"
                src={item.img}
                alt={item.alt}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default HeaderSection;
