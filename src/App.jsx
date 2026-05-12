import React from "react";
import Navbar from "../components/Navbar";
import ToPost from "../components/home/ToPost";

const App = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar></Navbar>
      <ToPost></ToPost>
    </div>
  );
};

export default App;
