import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import Header from "../components/Header";
import { BsBootstrapFill } from "react-icons/bs";
import { SiMui } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh]">
      <Header />
      <h1 className="text-center text-4xl md:text-5xl underline text-white font-bold mt-10">My Skills</h1>
      <div className="flex items-center justify-center gap-5 w-[90%] sm:w-[75%] sm:gap-10 m-auto flex-wrap mt-14">
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <FaHtml5 className="text-5xl" style={{ color: "#E6532D" }} />
          <p className="text-lg mt-2 text-white font-bold">HTML</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <FaCss3Alt className="text-5xl" style={{ color: "#2D53E5" }} />
          <p className="text-lg mt-2 text-white font-bold">CSS</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
        <BsBootstrapFill className="text-5xl" style={{ color: "#7710F1" }} />
          <p className="text-lg mt-2 text-white font-bold">Bootstrap</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
        <SiMui className="text-5xl" style={{ color: "#007DC5" }} />
          <p className="text-lg mt-2 text-white font-bold">Material UI</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
        <RiTailwindCssFill className="text-5xl" style={{ color: "#15B8C5" }} />
          <p className="text-lg mt-2 text-white font-bold">Tailwind CSS</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <TbBrandJavascript
            className="text-5xl"
            style={{ color: "#D5BA36" }}
          />
          <p className="text-lg mt-2 text-white font-bold">JavaScript</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <BiLogoTypescript className="text-5xl" style={{ color: "#2F74C0" }} />
          <p className="text-lg mt-2 text-white font-bold">TypeScript</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <FaReact className="text-5xl" style={{ color: "#00D1F7" }} />
          <p className="text-lg mt-2 text-white font-bold">React.js</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <RiNextjsFill className="text-5xl" style={{ color: "#080808" }} />
          <p className="text-lg mt-2 text-white font-bold">Next.js</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <FaWordpress className="text-5xl" style={{ color: "#28799E" }} />
          <p className="text-lg mt-2 text-white font-bold">WordPress</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center bg-gray-700 w-40 h-40 rounded-md hover:bg-customYellow cursor-pointer">
          <FaShopify className="text-5xl" style={{ color: "#98C14D" }} />
          <p className="text-lg mt-2 text-white font-bold">Shopify</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
