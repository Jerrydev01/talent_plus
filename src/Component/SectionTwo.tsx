import React from "react";
import img2 from "../assets/img2.png";
import speakerIcon from "../assets/speakericon.svg";
import antennaIcon from "../assets/settings_input_antenna.svg";
import autoplayIcon from "../assets/autoplayicon.svg";
import noteIcon from "../assets/descriptionicon.svg";
import h3 from "../assets/VectorH3.svg";
import socials_P from "../assets/socials_r.jpg";

interface courseProps {
  id: string;
  img: string;
  title: string;
  color: string;
}
const courses: courseProps[] = [
  {
    id: "1",
    img: speakerIcon,
    title: "audio classes",
    color: "#3FA96A33",
  },
  {
    id: "2",
    img: antennaIcon,
    title: "live classes",
    color: "#F79E8E33",
  },
  {
    id: "3",
    img: autoplayIcon,
    title: "recorded classes",
    color: "#9269CD33",
  },
  {
    id: "4",
    img: noteIcon,
    title: "50+ notes",
    color: "#5978CF33",
  },
];

const SectionTwo = () => {
  return (
    <section className="bg_sec_two">
      <article className="container_padding lg:flex flex-col lg:flex-row justify-between gap-[40px] items-center ">
        <div className="relative">
          <img
            src={h3}
            alt=""
            className="absolute left-0 -translate-x-3 lg:-translate-x-8 lg:-translate-y-6 -translate-y-6 w-[24px] h-[36px] lg:w-[43.86px] lg:h-[65.51px]"
          />
          <h2 className="lg:text-[56px] text-[24px] text-center lg:text-left font-bold capitalize mt-[40px] lg:mt-[0px]">
            high quality video, audio & live classes
          </h2>
          <p className="pt-[16px] pb-[32px] text-neutralColor text-center lg:text-left capitalize">
            high-definition video is video of higher resolution and quality than
            standard definition. while there&#39;s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="grid place-items-center lg:block">
            <button className="bg-primaryColor text-white px-[32px] py-[12px] rounded-[4px]">
              view courses
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[24px] pt-[24px]">
            {courses.map((item: courseProps) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-[16px] px-[24px] lg:py-[20px] py-[8px] rounded-[8px] bg-white"
                >
                  <div
                    style={{
                      backgroundColor: item.color,
                    }}
                    className="lg:p-[8px] p-[4.5px]  rounded-[4px]"
                  >
                    <img src={item.img} alt={item.title} className="w-[16px]" />
                  </div>
                  <div className="">
                    <h4 className="text-black font-bold capitalize text-[8px] lg:text-[16px]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:mt-[96px] mt-[50px] ">
          <div className="absolute z-10 bg-white py-[6px] lg:px-[33px] px-[11px] rounded-[4px] grid place-items-center lg:translate-y-[9rem] translate-y-[2rem] -translate-x-3">
            <p className="font-bold text-center pb-2 text-[8px] lg:text-[12px]">
              255k+ enrolled students
            </p>
            <img
              className="lg:w-[157px] w-[80px]  pb-2"
              src={socials_P}
              alt="people socials"
            />
          </div>
          <img
            src={img2}
            alt="person working"
            className=" w-[100%] aspect-[1/1] -translate-y-8"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionTwo;
