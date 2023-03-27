import React from "react";
import img3 from "../assets/img3.png";
import img4Icon from "../assets/cast_for_educationS2.svg";
import img5Icon from "../assets/scheduleS3.svg";
import img6Icon from "../assets/groupsS3.svg";
import img7Icon from "../assets/local_atmsS3.svg";

interface courseProps {
  id: string;
  img: string;
  title: string;
  description: string;
  color: string;
}
const courseReviews: courseProps[] = [
  {
    id: "1",
    img: img4Icon,
    title: "experienced mentors",
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    color: "#4C7FBD",
  },
  {
    id: "2",
    img: img5Icon,
    title: "one-on-one meetings",
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    color: "#AECD5E",
  },
  {
    id: "3",
    img: img6Icon,
    title: "one-on-one meetings",
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    color: "#ED6BA6",
  },
  {
    id: "4",
    img: img7Icon,
    title: "affordable prices",
    description:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    color: "#EA6B45",
  },
];

const SectionThree = () => {
  return (
    <section className="bg_sec_three">
      <article className="flex flex-col lg:flex-row justify-between lg:gap-[130px] gap-[32px] items-center container_padding mt-[40px]">
        <div className="lg:w-[50%]">
          <h2 className="lg:text-[56px] text-[24px] text-center lg:text-left font-bold capitalize mt-[40px] lg:mt-[0px]">
            this is why we are best from others
          </h2>
          <p className="pt-[16px] pb-[32px] text-neutralColor text-center lg:text-left capitalize">
            high-definition video is video of higher resolution and quality than
            standard definition. while there&#39;s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img src={img3} alt="person" className="lg:h-1/2 lg:object-contain" />
        </div>
        <div className="grid grid-cols-2 lg:gap-[24px] gap-[8px] lg:w-[50%]">
          {courseReviews.map((item: courseProps) => {
            return (
              <div key={item.id} className="p-[24px] bg-white rounded-[8px]">
                <div
                  style={{
                    backgroundColor: item.color,
                  }}
                  className="lg:p-[12px] p-[9px] rounded-[4px] w-fit lg:mt-[8px]"
                >
                  <img src={item.img} alt="" className="" />
                </div>
                <h5 className="lg:pt-[20px] pt-[8px] font-bold capitalize">
                  {item.title}
                </h5>
                <p className="text-neutralColor lg:text-[12px] text-[8px]  text-[500] lg:leading-[24px] leading-[16px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default SectionThree;
