import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh]">
      <Header />
      <h1 className="text-center text-4xl md:text-5xl underline text-white mt-10 font-bold">About Me</h1>
      <div className="text-gray-300 w-[80%] sm:w-[85%] m-auto py-6 pt-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Electronics to Code: My Journey into Web Development
          </h2>
          <p className="text-md">
            Starting out in electronics engineering, I discovered my passion for
            solving problems through code. This led me to pursue a Master's in
            Computer Science and Information Technology (CSIT), where I fell in
            love with frontend development.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Frontend Developer with a Creative Edge
          </h2>
          <p className="text-md">
            With over a year of experience, I specialize in developing
            responsive, user-friendly web interfaces. Proficient in HTML5, CSS3,
            JavaScript, and frameworks like React, I focus on writing clean,
            optimized code that bridges design and functionality.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Collaboration Meets Innovation
          </h2>
          <p className="text-md">
            I thrive in collaborative environments, where I work closely with
            teams to transform creative ideas into functional, high-performing
            solutions. Whether it's integrating APIs, implementing modern
            frameworks, or enhancing web performance, I’m driven by the
            challenge of solving problems and delivering exceptional results.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Lifelong Learner with a Passion for Growth
          </h2>
          <p className="text-md">
            I believe that continuous learning is key to staying ahead in web
            development. From mastering new technologies to exploring the latest
            trends, I’m always seeking opportunities to refine my skills and
            grow with every project.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Design Meets Functionality
          </h2>
          <p className="text-md">
            I’m passionate about the intersection of design and technology. My
            approach is all about creating seamless, visually appealing digital
            experiences that are both functional and efficient, ensuring users
            have the best experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
