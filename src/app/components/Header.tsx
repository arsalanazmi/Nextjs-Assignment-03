"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white sticky top-0 z-10 bg-gray-900 shadow-md shadow-gray-700 flex items-center justify-between gap-5 sm:px-10 px-6 pt-5 pb-2">
      {/* Logo */}
      <div>
        <a href="/">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Portfolio</h2>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <ul className="flex justify-between items-center gap-5 text-lg">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden" onClick={toggleMenu}>
        {!isOpen ? (
          <GiHamburgerMenu className="text-2xl cursor-pointer transition-transform transform duration-300 ease-in-out" />
        ) : (
          <IoClose className="text-2xl cursor-pointer transition-transform transform duration-300 ease-in-out" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white sm:hidden">
          <ul className="flex flex-col items-center gap-5 text-lg py-5">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"/work"}>work</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
