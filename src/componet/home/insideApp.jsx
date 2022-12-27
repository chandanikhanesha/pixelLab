import React from "react";
import Artboard_1 from "../../assests/Artboard – 1.png";
import capgirl3 from "../../assests/Group 11357.png";
import Artboard_5 from "../../assests/Artboard – 5.png";
import quots from "../../assests/Group 11373.png";
import Slider from "react-slick";
import { Element } from "react-scroll";
import Artboard_8 from "../../assests/Artboard – 8.png";
import Artboard_9 from "../../assests/Artboard – 9.png";
import Artboard_10 from "../../assests/Artboard – 10.png";

import Artboard_13 from "../../assests/Artboard – 13.png";
import Artboard_14 from "../../assests/Artboard – 14.png";
import Artboard_15 from "../../assests/Artboard – 15.png";
import Artboard_16 from "../../assests/Artboard – 16.png";
import Artboard_17 from "../../assests/Artboard – 17.png";
import Artboard_18 from "../../assests/Artboard – 18.png";
import Artboard_19 from "../../assests/Artboard – 19.png";

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="arrow_btn arrow-prev" onClick={onClick}>
      <i class="fa fa-caret-left" aria-hidden="true"></i>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="arrow_btn arrow-next" onClick={onClick}>
      <i class="fa fa-caret-right" aria-hidden="true"></i>
    </div>
  );
};
function insideApp() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Element id="insideApp" name="insideApp">
      <div>
        <div className="row title_container ">
          <div className="col">
            <div className="border_line marginL_100" />
          </div>
          <div className="col">
            <div className="fewClick_title">A quick look of the app</div>
          </div>
          <div className="col">
            <div className="border_line" />
          </div>
        </div>
        <div className="row">
          <div className="col-1 inside_circle">
            <img
              src={Artboard_1}
              style={{ height: "350px", width: "75px" }}
            ></img>
          </div>
          <div className="col-11 colClass">
            <div className="slider_container">
              <Slider {...settings}>
                <div className="img_container">
                  <img src={Artboard_8} className="img_size" />
                  <span>Erase Background In One Click.</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_9} className="img_size" />
                  <span>Add different type of quotes</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_10} className="img_size" />
                  <span>Choose different layout and filters.</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_15} className="img_size" />
                  <span>Customize it with your favorite photo</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_18} className="img_size" />
                  <span>Different types of stickers can be added</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_17} className="img_size" />
                  <span>
                    Take your photos to the next level with trending drip
                    effects
                  </span>
                </div>
                <div className="img_container">
                  <img src={Artboard_13} className="img_size" />
                  <span>User-friendly UI for a better experience</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_14} className="img_size" />
                  <span>Edit your photos with a custom filter.</span>
                </div>
                <div className="img_container">
                  <img src={Artboard_16} className="img_size" />
                  <span>Add content with different font styles</span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default insideApp;
