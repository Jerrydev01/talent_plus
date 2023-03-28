import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import logo from "../assets/logo.svg";

const BaseLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <section className="w-full h-screen bg-primaryColor flex justify-center items-center">
          <img src={logo} alt="" className="scale-in-center" />
        </section>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default BaseLayout;
