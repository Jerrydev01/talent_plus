import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout = ({ children }: any) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default BaseLayout;
