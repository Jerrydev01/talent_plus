import React, { useState } from "react";
import { categoryData } from "../utils/data";
import { Props } from "../utils/data";
import clockIcon from "../assets/clockIcon.svg";
import lessonIcon from "../assets/bookIcon.svg";

interface PropsLinks {
  id: string;
  category: string;
}

const categories: PropsLinks[] = [
  {
    id: "1",
    category: "all categories",
  },
  {
    id: "2",
    category: "design",
  },
  {
    id: "3",
    category: "development",
  },
  {
    id: "4",
    category: "marketing",
  },
];

const SectionFour = () => {
  const [selectCategory, setSelectCategory] = useState("all categories");
  const [filteredData, setFilteredData] = useState(categoryData);

  // function that choose category
  // function that choose category
  const handleChooseCategory = (category: string) => {
    setSelectCategory(category);
    if (category === "all categories") {
      setFilteredData(categoryData);
    } else {
      const newData = categoryData.filter(
        (item) =>
          item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
      setFilteredData(newData);
      console.log(newData);
    }
  };
  return (
    <section>
      <article className="lg:pt-[80px] pt-[35px] container_padding">
        <div className="grid place-items-center">
          <h2 className="lg:text-[56px] text-[24px] text-center lg:text-left font-bold capitalize mt-[40px] lg:mt-[0px] lg:leading-[68.88px]">
            browse our popular courses
          </h2>
          <p className=" pt-[16px] pb-[32px] text-neutralColor text-center capitalize lg:w-[55%]">
            high-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <article>
          <div className="flex flex-nowrap justify-center lg:gap-[76px] gap-[20px] pb-[54px]">
            {categories.map((item: PropsLinks) => {
              return (
                <button
                  onClick={() => {
                    handleChooseCategory(item.category);
                  }}
                  key={item.id}
                  className={` font-bold capitalize rounded-[4px] lg:text-[16px] text-[10px] ${
                    selectCategory === item.category
                      ? "bg-white px-[16px] py-[12px] text-primaryColor rounded-[4px]"
                      : "text-neutralColor"
                  }`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[24px] gap-[10px]">
            {filteredData.map((item: Props) => {
              return (
                <article
                  key={item.id}
                  className="lg:px-[20px] px-[8px] pt-[16px] lg:pb-[32px] pb-[16px] bg-white lg:rounded-[16px] rounded-[4px]"
                >
                  <img src={item.img} alt="" className="" />
                  <div className="flex justify-between items-center mt-[15px]  font-bold">
                    <p className=" text-primaryColor bg-[#1E5DCE33] px-[20px] py-[8px]  rounded-[16px] lg:text-[12px] text-[8px]">
                      {item.category}
                    </p>
                    <div className="text-neutralColor flex gap-2 ">
                      <span className="lg:text-[12px] text-[8px]">
                        {item.ratings}{" "}
                      </span>
                      <span className="lg:text-[12px] text-[8px]">
                        {item.totalRatings}
                      </span>
                    </div>
                  </div>
                  <h2 className="lg:text-[24px] text-[12px] font-[600] pt-[20px] lg:leading-[32.4px] text-[#000F24] capitalize">
                    {item.title}
                  </h2>
                  <div className="flex justify-between lg:pt-[18px] pt-[5px] text-neutralColor">
                    <div className="flex gap-2 items-center">
                      <span className="">
                        <img
                          src={clockIcon}
                          alt="clock"
                          className="object-contain aspect-[1/1] lg:w-[20px] w-[10px]"
                        />
                      </span>
                      <span className="lg:text-[1rem] text-[8px]">
                        {item.TimeRanges}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">
                        <img
                          src={lessonIcon}
                          alt="clock"
                          className="object-contain aspect-[1/1] lg:w-[20px] w-[10px]"
                        />
                      </span>
                      <span className="lg:text-[1rem] text-[8px]">
                        {item.lessons} Lessons
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center lg:pt-[30px] pt-[16px] text-neutralColor">
                    <div className="flex gap-2 items-center">
                      <span className="">
                        <img
                          src={item.profileImg}
                          alt="clock"
                          className="object-contain aspect-[1/1] lg:w-[40px] w-[16px]"
                        />
                      </span>
                      <span className="text-[#000] font-bold lg:text-[1rem] text-[8px]">
                        {item.profileName}
                      </span>
                    </div>
                    <div className="text-primaryColor font-semibold text-[20px]">
                      <h4 className="lg:text-[1rem] text-[8px]">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="my-[40px] flex justify-center w-full">
            <button className="bg-primaryColor text-white px-[32px] py-[16px] rounded-[4px]">
              explore all courses
            </button>
          </div>
        </article>
      </article>
    </section>
  );
};

export default SectionFour;
