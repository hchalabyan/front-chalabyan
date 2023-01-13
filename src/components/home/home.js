import React, { useEffect, useState } from "react";
import Header from "../header/header";
import WebNavigation from "../webNavigation/webNavigation";
import MobileMenu from "../mobileMenu/mobileMenu";
import Posts from "../posts/posts";

const Home = () => {
  const [mobile, setIsMobile] = useState(false);
  const handResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else if (window.innerWidth > 767) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handResize);
    return () => {
      window.removeEventListener("resize", handResize);
    };
  });
  return (
    <>
      <Header />
      {!mobile ? <WebNavigation /> : <MobileMenu />}
      <Posts />
    </>
  );
};
export default Home;
