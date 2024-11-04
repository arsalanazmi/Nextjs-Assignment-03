"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "../components/ToastNotification";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email, // This will be the sender's email
      message: formData.message,
    };

    emailjs
      .send(
        "service_n71v3ha", // EmailJS Service ID
        "template_hfcyza1", // EmailJS Template ID
        templateParams,
        "H5VbQvZDNr-RelF4X" // EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <div className="bg-gray-900 min-h-[100vh]">
      <Header />
      <ToastNotification />
      <h1 className="text-center text-4xl md:text-5xl underline text-white font-bold mt-10">
        Contact Us
      </h1>{" "}
      <div className="flex flex-col sm:flex-row text-gray-300 justify-around items-start flex-wrap sm:mt-16 mt-10 sm:px-10 px-4">
        <div className="sm:w-[45%] w-full mb-12 sm:mb-0">
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">Let's Talk</h2>
            <p className="text-md md:text-lg">
              Have some big ideas & need a brand or website.Then please reach
              out,we would love to here more about you, your project and how we
              can help!
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Email</h2>
            <p className="text-md md:text-lg">
              <a
                href="mailto:arsalan.azmi92@gmail.com"
                className="hover:text-gray-500"
              >
                arsalan.azmi92@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="sm:w-[45%] w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="form-control w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-gray-300 bg-transparent border-b-2 outline-none"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-gray-300 bg-transparent border-b-2 outline-none"
                />
              </div>
              <div className="form-control w-[100%]">
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here*"
                  className="w-[100%] p-2 text-gray-300 bg-transparent border-b-2 outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 shadow-md shadow-gray-200 border-2 hover:shadow-sm border-gary-200 transition-shadow duration-300 ease-in-out  "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
