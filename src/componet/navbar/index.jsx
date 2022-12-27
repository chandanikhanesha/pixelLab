import React from "react";
import "./index.css";
import pixelLogo from "../../assests/pixelLogo.png";
import editPhoto from "../../assests/Artboard – 19.png";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
// import gpay from "../../assests/gpay.png";
// import appStore from "../../assests/appstore.png"

function navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_line">
        <div class="row" style={{ width: "100%" }}>
          <div class="col">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <div className="pixelLogoBox navbar-brand">
                  <img
                    src={pixelLogo}
                    className="pixelImg"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  ></img>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i
                    class="fa fa-align-justify"
                    aria-hidden="true"
                    style={{ color: "white", fontSize: "30px" }}
                  ></i>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="questions"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        FAQ's
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="insideApp"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        Preview
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="lines_section">
              <span className="line1">Image Editing on Fingertips!</span>
              <span className="line2">
                There are many features that Pixellab offers such as resizing,
                custom filters, frames, and more. This app can also produce
                professional images and allow you to share them across multiple
                platforms. A free version of PixelLab comes with many of the
                features of a pro version.
              </span>
            </div>
            <div className="btn_section">
              <div
                className="gpay color-1 gpay_mb"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-easing="linear"
              >
                <i class="fab fa-google-play btn_icon " aria-hidden="true" />
                <span>Coming soon</span>
              </div>
              <div
                className="appstore color-2"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-easing="linear"
              >
                <i class="fab fa-apple btn_icon" aria-hidden="true" />
                <a
                  href="https://apps.apple.com/app/id1658958601"
                  target="_blank"
                  className="icon_link"
                >
                  app store
                </a>
              </div>
            </div>
          </div>

          <div class="col centerclass">
            <img
              src={editPhoto}
              className="editPhoto hide"
              data-aos="flip-right"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos-duration="1000"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
