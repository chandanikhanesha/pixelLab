import React from "react";
import "./index.css";
import pixelLogo from "../../assests/pixelLogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="footer_container">
      <div className="row">
        <div className="col-5 colClass">
          <div className="footer_col">
            <div className="title_footer">
              <img src={pixelLogo} className="footer_logo"></img>
              <div>PixelLab: Drip & Text on Photo</div>
            </div>
            PixelLab is the easiest photo editing app that offers PRO features
            for free. You can make professional looking photos in just one
            click.
            <div className="d-flex justify-content-center">
              <div className="media_icon color-1">
                <a
                  href="https://www.facebook.com/PixelLab.Drip.Collagemaker"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f icon_link" aria-hidden="true"></i>
                </a>
              </div>
              <div className="media_icon color-1">
                <a
                  href="https://www.youtube.com/channel/UCPWaaJz94vcXg8m1QAnggtw"
                  target="_blank"
                >
                  <i class="fab fa-youtube icon_link" aria-hidden="true"></i>
                </a>
              </div>
              <div className="media_icon color-1">
                <a
                  href="https://www.pinterest.com/PixelLabDripCollageMaker/_created"
                  target="_blank"
                >
                  <i class="fab fa-pinterest icon_link"></i>
                </a>
              </div>

              <div className="media_icon color-1">
                <a
                  href="https://www.instagram.com/pixellab.drip.collagemaker/"
                  target="_blank"
                >
                  <i class="fab fa-instagram icon_link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 colClass">
          <div className="footer_col">
            <div className="title_footer">Help</div>

            <Link
              to="questions"
              spy={true}
              smooth={true}
              duration={500}
              className="footer_link"
            >
              FAQ's
            </Link>

            <a
              className="footer_link"
              href="https://release.law.blog/2021/08/21/pixellab-drip-collage-maker-privacy-policy/"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              className="footer_link"
              href="mailto:Jstechnovation@gmail.com?body=support"
            >
              Support
            </a>

            <a
              className="footer_link"
              href="https://release.law.blog/2021/08/21/pixellab-drip-collage-maker-privacy-policy/"
              target="_blank"
            >
              Terms & Condition
            </a>
            <a
              className="footer_link"
              href="https://release.law.blog/contact/"
              target="_blank"
            >
              contact
            </a>
          </div>
        </div>
        <div className="col-4 colClass">
          <div className="footer_col">
            <div className="title_footer">Download</div>
            <div className="footer_btn">
              <div className="gpay color-1">
                <i class="fab fa-google-play btn_icon " aria-hidden="true" />
                <span>coming soon</span>
              </div>
              <div className="appstore color-2" style={{ marginTop: "30px" }}>
                <i class="fab fa-apple btn_icon" aria-hidden="true" />
                <a
                  href="https://apps.apple.com/app/id1658958601"
                  target="_blank"
                  className="icon_link"
                >
                  app store
                </a>
              </div>
              <div className="gpay color-1" style={{ marginTop: "30px" }}>
                <a
                  href="https://apps.apple.com/developer/piyush-shiyani/id1477520785"
                  target="_blank"
                  className="icon_link"
                >
                  More Apps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
