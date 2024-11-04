import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import "animate.css";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-[100vh] w-[100%] relative">
      <Header />
      <div className="flex justify-around items-center flex-wrap gap-5 pt-8  p-3">
        {/* Text Content */}
        <div className="text-center mb-10 lg:mb-0">
          <h2 className=" text-4xl text-white mb-4 animate__animated animate__zoomIn">
            <span className="text-4xl md:text-5xl">Hi, </span>I'm{" "}
            <span className="text-yellow-300 text-3xl md:text-4xl">Arsalan Raza Azmi</span>
          </h2>
          <h4 className="text-3xl md:text-4xl text-white animate__animated animate__fadeInDown">
            Junior Frontend Developer
          </h4>
          <button className="contact-btn mt-8 bg-transparent shadow-md shadow-yellow-200 text-xl text-yellow-200 border border-yellow-200 px-4 py-1 transition-shadow duration-300 ease-in-out animate__animated animate__zoomIn">
            <a href="/contact-us">Contact Me</a>
          </button>
        </div>

        {/* Profile Image */}
        <div className="customBackground">
          <img
            src="/images/profile_image.png"
            alt="profile"
            className="animate__animated animate__fadeIn w-60 md:w-80"
          />
        </div>
      </div>

      {/* Social Icons at the bottom right */}
      <div className="absolute bottom-0 right-0 mb-5 mx-5 hidden lg:block animate__animated animate__zoomIn">
        <div className="flex flex-col items-center gap-5">
          <a href="https://www.facebook.com/arsalan.azmi.9" target="_blank">
            <FaFacebook size={30} style={{ color: "#0076B3" }} />
          </a>
          <a href="https://www.instagram.com/arsalanazmi92/" target="_blank">
            <FaInstagram size={30} className="insta" />
          </a>
          <a href="https://github.com/arsalanazmi" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/arsalanazmi">
            <FaLinkedin size={30} style={{ color: "#0076B3" }} />
          </a>

          {/* Vertical Line */}
          <div className="w-px h-[25vh] bg-gray-400 mt-1"></div>
        </div>
      </div>
    </div>
  );
}
