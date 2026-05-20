import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex justify-items-start ">
        {/* navbar */}
        <Navbar className=""></Navbar>
        {/* content */}
        <div>
          <Outlet></Outlet>
          {/* footer */}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
