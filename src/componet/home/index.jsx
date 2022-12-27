import React from "react";
import Navbar from "../navbar";
import FewClick from "./fewClick";
import Questions from "./questions";
import InsideApp from "./insideApp";
import Footer from "../footer";

function home() {
  return (
    <div className="main_container">
      <Navbar />
      <FewClick />
      <Questions />
      <InsideApp />
      <Footer />
    </div>
  );
}

export default home;
