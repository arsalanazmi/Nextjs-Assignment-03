import React from "react";
import Header from "../components/Header";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { data } from "../workData";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh]">
      <Header />
      <h1 className="text-center text-4xl md:text-5xl underline text-white font-bold mt-10">
        My Work
      </h1>
      <div className="mt-8 flex justify-center items-center flex-wrap gap-4">

        {data &&
          data.map((item, index) => (
            <div key={index} className=" bg-gray-500 hover:bg-gray-800 rounded-md w-72  h-80">
              <div>
                <img src={item?.image} alt="Logo" />
              </div>
              <div className="text-white p-2 flex flex-col justify-end">
                <h4 className="text-2xl font-bold">{item?.title}</h4>
                <p className="text-md">{item?.description}</p>
                <div className="flex justify-end items-center gap-2">
                  <div>
                    <a href={item?.github} target="_blank">
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  <div>
                    <a href={item?.url} target="_blank">
                      <MdLiveTv className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
