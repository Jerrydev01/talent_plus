import React from "react";
import HeaderSection from "./HeaderSection";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import FaqSection from "./FaqSection";

const Home = () => {
  return (
    <main>
      <HeaderSection />
      <section className="">
        <SectionTwo />
      </section>
      <section className="">
        <SectionThree />
      </section>
      <section className="">
        <SectionFour />
      </section>
      <section className="">
        <SectionFive />
      </section>
      <section className="">
        <SectionSix />
      </section>
      <section className="">
        <FaqSection />
      </section>
    </main>
  );
};

export default Home;
