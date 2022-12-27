import React from "react";
import "./index.css";
import centerHeart from "../../assests/Artboard – 15.png";
import sticker from "../../assests/Artboard – 18.png";
import umbrella from "../../assests/Artboard – 17.png";
import Artboard_6 from "../../assests/Artboard –6.png";
import editPhoto from "../../assests/Artboard – 19.png";
import Artboard_1 from "../../assests/Artboard – 1.png";
import Artboard_3 from "../../assests/Artboard – 3.png";

function fewClick() {
  return (
    <div>
      <div className="row title_container">
        <div className="col centerclass">
          <div className="border_line" />
        </div>
        <div className="col centerclass">
          <div className="fewClick_title">
            Create beautiful photos in just a few clicks
          </div>
        </div>
        <div className="col centerclass">
          <div className="border_line" />
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-between col col-md-4">
          <div className="circle_sideLeft">
            <img
              src={Artboard_1}
              style={{ height: "350px", width: "75px" }}
            ></img>
          </div>
          <div className="fewClickimg_container">
            <div className="fewClick_div">
              {" "}
              <img
                src={centerHeart}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="fewClickimg_small"
                alt="centerHeart"
              ></img>
              <span className="fewClickimg_span">
                Customize it with your favorite photo
              </span>
            </div>
            <div
              className="fewClick_div"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={umbrella}
                className="fewClickimg_small"
                alt="umbrella"
              ></img>
              <span className="fewClickimg_span">
                Take your photos to the next level with trending drip effects
              </span>
            </div>
          </div>
        </div>
        <div className="col center_col col-md-4">
          <img
            src={editPhoto}
            className="fewClickimg_big"
            data-aos="zoom-in"
            data-aos-delay="600"
          ></img>
          <span className="fewClickimg_span">
            User-friendly UI for a better experience
          </span>
        </div>
        <div className="dflexclass col col-md-4">
          <div className="fewClickimg_container">
            <div className="fewClick_div">
              <img
                src={Artboard_6}
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                className="fewClickimg_small"
                alt="Artboard_6"
              ></img>
              <span className="fewClickimg_span">
                Edit your photos with a custom filter
              </span>
            </div>
            <div
              className="fewClick_div"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={sticker}
                className="fewClickimg_small"
                alt="sticker"
              ></img>
              <span className="fewClickimg_span">
                Different types of stickers can be added
              </span>
            </div>
          </div>
          <div className="circle_sideRight">
            <img src={Artboard_3} style={{ height: "370px" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fewClick;
