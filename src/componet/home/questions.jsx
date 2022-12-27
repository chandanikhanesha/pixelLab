import React, { useState } from "react";
import Artboard_2 from "../../assests/Artboard – 2.png";
import Artboard_4 from "../../assests/Artboard – 4.png";
import Artboard_19 from "../../assests/Artboard – 19.png";
import { Element } from "react-scroll";

function Questions() {
  var [toggle1, setToggle1] = useState(false);
  var [toggle2, setToggle2] = useState(false);
  var [toggle3, setToggle3] = useState(false);
  var [toggle4, setToggle4] = useState(false);
  var [toggle5, setToggle5] = useState(false);
  var [toggle6, setToggle6] = useState(false);
  var [toggle7, setToggle7] = useState(false);

  return (
    <Element id="questions" name="questions">
      <div>
        <div className="row que_container">
          <div className="col d-flex">
            <div className="d-flex align-items-end">
              <img src={Artboard_2} className="Artboard_2"></img>
            </div>
            <div className="que_title_section">
              <div
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle1(!toggle1)}
                aria-controls="collapseExample"
              >
                <div className="que_title">
                  Some Frequently Asked Question!!!
                </div>
                <div className="circle_icon">
                  <i
                    class={toggle1 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                  ></i>
                  <span className="ml_40">
                    What are the background features in this app?
                  </span>
                </div>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    In this app, you get the option to remove the background,
                    add the photo to different sets of backgrounds, or use
                    custom backgrounds.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle2(!toggle2)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle2 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                  ></i>

                  <span className="ml_40">
                    How to save photos that are edited?
                  </span>
                </div>
                <div class="collapse" id="collapseExample1">
                  <div class="card card-body">
                    App automatically saves all your edits in my collection
                    where you can save directly to your phone.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle3(!toggle3)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle3 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                  ></i>
                  <span className="ml_40">
                    How to use a custom filter option?
                  </span>
                </div>
                <div class="collapse" id="collapseExample2">
                  <div class="card card-body">
                    PixelLab has created a unique feature called custom filter
                    where you can create your own filter by adjusting the color,
                    brightness, contrast, tint, saturation, intensity, warmth,
                    fade, exposure, shadows, and much more. To create
                    professional photos.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample3"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle4(!toggle4)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle4 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                  ></i>
                  <span className="ml_40">How to edit quotes?</span>
                </div>
                <div class="collapse" id="collapseExample3">
                  <div class="card card-body">
                    PixelLab has quotes divided into categories so that you can
                    pick as per your mood. Quotes available are in English,
                    Hindi, Gujarati, Maharani, Bangla, and Kannad. Simply add
                    quotes to your photo in the editing section and adjust
                    according to your need.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample4"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle5(!toggle5)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle5 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                  ></i>
                  <span className="ml_40">How to resize a photo?</span>
                </div>
                <div class="collapse" id="collapseExample4">
                  <div class="card card-body">
                    Click on the editing option then choose a photo you want to
                    resize. Using the app you can resize any photo to square,
                    2:3, 3:5, 3:4, or resize as per social media platforms.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample5"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle6(!toggle6)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle6 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                    data-bs-toggle="collapse"
                    href="#collapseExample5"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample5"
                  ></i>
                  <span className="ml_40">How to share my photo?</span>
                </div>
                <div class="collapse" id="collapseExample5">
                  <div class="card card-body">
                    After editing you can directly share your photo to your
                    preferred social networking platform from the app.
                  </div>
                </div>
              </div>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample6"
                role="button"
                aria-expanded="false"
                onClick={(e) => setToggle7(!toggle7)}
                aria-controls="collapseExample"
              >
                <div className="circle_icon">
                  <i
                    class={toggle7 ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                    data-bs-toggle="collapse"
                    onClick={(e) => setToggle7(!toggle7)}
                    href="#collapseExample6"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample6"
                  ></i>
                  <span className="ml_40">How to add tattoo stickers?</span>
                </div>
                <div class="collapse" id="collapseExample6">
                  <div class="card card-body">
                    It's very easy to add an editing option, choose your photo,
                    and add a tattoo sticker. You can resize the sticker as per
                    your preference.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="d-flex justify-content-end ">
              <img
                src={Artboard_19}
                className="Artboard_19"
                data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-delay="300"
              ></img>

              <img src={Artboard_4} className="Artboard_4"></img>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Questions;
