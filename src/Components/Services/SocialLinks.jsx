import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Container from "../Helper/Container";
// import Divider from "../Helper/Divider"
const SocialLinks = () => {
  return (
    <>
      <Container className={"flex justify-center bg-gray-200/40"}>
        <div className="section-title pb-20 text-center">
          <h2 className="lg:text-3xl text-lg font-bold text-yellow-600">
            Let's Get <span className="text-primary-color font-extrabold">Social</span>
          </h2>
          <p className="text-gray-700 font-semibold lg:text-xs text-[0.5rem] lg:max-w-64 mx-auto my-2 lg:my-1">Follow On Our Social Media Handles & Remain Up To Date!</p>
          {/* <Divider
            className={"mx-auto my-4 h-1 w-20 rounded-full bg-yellow-600"}
          /> */}
        </div>
        <div className="social-overlap process-scetion mt-36">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="social-icons iconpad mb-3 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-nav-item"
                  >
                    <FaFacebook className="icon text-blue-800" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-nav-item"
                  >
                    <FaTwitter className="icon text-sky-400" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-nav-item"
                  >
                    <FaInstagram className="icon text-pink-400" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-nav-item"
                  >
                    <FaLinkedin className="icon text-primary-color" />
                  </a>
                  <a href="#" className="slider-nav-item">
                    <FaYoutube className="icon text-red-500" />
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SocialLinks;
