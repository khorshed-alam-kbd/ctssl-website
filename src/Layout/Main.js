import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../components/utils/ScrollToTop";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
