import React, { useState } from "react";
import logo from "../assets/logo.svg";
import fbIcon from "../assets/facebookIcon.svg";
import twIcon from "../assets/twitterIcon.svg";
import ytIcon from "../assets/youtubIcon.svg";
import istIcon from "../assets/InstagramIcon.svg";
import dsIcon from "../assets/DiscordIcon.svg";
import { Link } from "react-router-dom";

interface Props {
  usefulLinks?: {
    name: string;
    link: string;
  }[];
  community?: {
    name: string;
    link: string;
  }[];
}

interface SocialsProps {
  name: string;
  link: string;
  img?: string;
}

const footerList: Props[] = [
  {
    usefulLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about us",
        link: "/",
      },
      {
        name: "our courses",
        link: "/",
      },
      {
        name: "testimonials",
        link: "/",
      },
      {
        name: "our community",
        link: "/",
      },
    ],
  },
  {
    community: [
      {
        name: "help centers",
        link: "/",
      },
      {
        name: "partners",
        link: "/",
      },
      {
        name: "suggestion",
        link: "/",
      },
      {
        name: "blog",
        link: "/",
      },
      {
        name: "newsletter",
        link: "/",
      },
    ],
  },
];

const socialIcons: SocialsProps[] = [
  {
    name: "facebook",
    link: "/",
    img: fbIcon,
  },
  {
    name: "twitter",
    link: "/",
    img: twIcon,
  },
  {
    name: "youtube",
    link: "/",
    img: ytIcon,
  },
  {
    name: "instagram",
    link: "/",
    img: istIcon,
  },
  {
    name: "discord",
    link: "/",
    img: dsIcon,
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  console.log("email", email);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <section className="bg-[#000F24] text-white mt-[80px] capitalize ">
      <article className="container_padding lg:py-[166px] py-10 ">
        <article className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="pr-[130px] lg:pr-0">
            <img src={logo} alt="logo" className="lg:w-[130px] w-[100px]" />
            <p className="py-[24px]">
              reach out to us on any of our social media networks
            </p>
            <div className="flex gap-[30px] items-baseline">
              {socialIcons.map((item: SocialsProps) => {
                return (
                  <Link to={item.link} className="">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[30px] aspect-[1/1] object-contain"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <ul className="flex flex-col gap-[16px]">
            <li className=" lg:text-[32px] text-[24px] clash_display font-[600]">
              useful links
            </li>
            {footerList.map((item: Props) =>
              item.usefulLinks?.map((list: any) => {
                return (
                  <li key={list.name}>
                    <Link className="lg:text-[24px] text-[16px]" to={list.link}>
                      {list.name}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
          <ul className="flex flex-col gap-[16px]">
            <li className="lg:text-[32px] text-[24px]  clash_display font-[600]">
              community
            </li>
            {footerList.map((item: Props) =>
              item.community?.map((list: any) => {
                return (
                  <li key={list.name}>
                    <Link className="lg:text-[24px] text-[16px]" to={list.link}>
                      {list.name}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
          <div className="">
            <h4 className="lg:text-[32px] text-[24px] clash_display font-[600]">
              subscribe us
            </h4>
            <div className="mt-[32px] relative">
              <input
                id="subscribe"
                type="email"
                className="py-[13px] pl-[1rem] pr-[7rem] border border-primaryColor bg-[#424141] rounded-tl-[2px] rounded-bl-[2px] w-full"
                value={email}
                onChange={handleSubmit}
                placeholder="nft123@gmail.com"
                required
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="py-[13.5px] px-[16px] bg-primaryColor absolute right-0"
              >
                subscribe
              </button>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Footer;
