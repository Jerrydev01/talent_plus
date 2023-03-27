import React from "react";
import imgSecSix from "../assets/imgsec6.png";

const SectionSix = () => {
  return (
    <section className="bg-primaryColor">
      <article className="lg:pt-[80px] pt-[0px] container_padding">
        <div className="grid place-items-center text-white">
          <p className=" pt-[16px] pb-[32px] text-center uppercase tracking-[0.2rem] lg:w-[55%]">
            join our community
          </p>
          <h2 className="lg:text-[56px] text-[24px] text-center font-bold capitalize w-[95%] lg:leading-[68.88px]">
            are you ready to connect with the future talent of the tech world
          </h2>
          <img src={imgSecSix} alt="" className="lg:w-[70%]" />
          <div className="my-[40px] flex justify-center w-full ">
            <button className="bg-white text-primaryColor px-[32px] py-[16px] rounded-[4px] capitalize font-bold">
              join our community
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SectionSix;
