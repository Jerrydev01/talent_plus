import React, { useState } from "react";

interface FaqProps {
  id: string;
  question: string;
  answer: string;
}

const faqdata: FaqProps[] = [
  {
    id: "1",
    question: "is there a free trial available?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
  {
    id: "2",
    question: "can i change my plan later?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
  {
    id: "3",
    question: "are the courses lifetime?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
  {
    id: "4",
    question: "do i get certified after taking courses?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
  {
    id: "5",
    question: "how do i reach out to mentors?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
  {
    id: "6",
    question: "do we get job ready after taking courses?",
    answer:
      "high-definition video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image",
  },
];

const FaqSection = () => {
  const [show, setShow] = useState("1");

  const handleClick = (id: string) => {
    setShow(id);
  };
  return (
    <section>
      <article className="lg:pt-[80px] pt-[35px] container_padding">
        <div className="grid place-items-center">
          <h2 className="lg:text-[56px] text-[24px] text-center lg:text-left font-bold capitalize mt-[40px] lg:mt-[0px] lg:leading-[68.88px]">
            frequently asked questions
          </h2>
          <p className=" pt-[16px] pb-[32px] text-neutralColor text-center capitalize lg:w-[55%]">
            high-definition video is video of higher resolution and quality than
            standard definition. while there's no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        {/*FAQ section  */}
        <div className="">
          {faqdata.map((item: FaqProps) => {
            return (
              <div key={item.id} className="capitalize lg:w-[70%] m-auto border-b border-b-[#EAEAEA] py-[32px]">
                <div
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  className={` font-[900] flex justify-between cursor-pointer ${
                    show === item.id ? "text-primaryColor" : "text-[#000F24]"
                  }`}
                >
                  <span className="">{item.question}</span>
                  {show === item.id ? (
                    <span className="">+</span>
                  ) : (
                    <span className="">-</span>
                  )}
                </div>
                {show === item.id ? (
                  <p className="text-neutralColor pt-[16px] ">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default FaqSection;
