import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

interface ListProps {
  id: number;
  title: string;
  path: string;
}

const list: ListProps[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "about us",
    path: "/#",
  },
  {
    id: 3,
    title: "courses",
    path: "/#",
  },
  {
    id: 4,
    title: "testimonial",
    path: "/#",
  },
  {
    id: 5,
    title: "community",
    path: "/#",
  },
  {
    id: 6,
    title: "enroll now",
    path: "/#",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="bg-primaryColor">
      <article className="container_padding py-[35px] flex justify-between items-center fixed z-50 w-full bg-primaryColor">
        <img
          className="lg:w-[130px] lg:h-[47px] w-[53px] relative z-[9999]"
          src={logo}
          alt="logo"
        />

        <ul
          className={`lg:flex lg:flex-row  gap-[24px]  capitalize  ${
            show === true
              ? "flex flex-col text-center  bg-primaryColor absolute h-screen right-0 top-[80px] w-full"
              : "hidden"
          }`}
        >
          {list.map((item: ListProps) => {
            return (
              <li key={item.id}>
                <a
                  className="text-[#AAC4E6] text-[16px] font-bold lg:font-normal"
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleClick}
          className="text-white text-[54px] font-bold lg:hidden relative z-[9999]"
        >
          {show === false ? <AiOutlineMenu /> : <IoCloseSharp />}
        </button>
      </article>
    </div>
  );
};

export default Header;
