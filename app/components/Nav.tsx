import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center h-24 px-8 shadow">
      <h1 className="w-full md:text-3xl text-2xl font-bold">
        <span className="hover:cursor-pointer">
          <span className="text-red-500">
            {"<"}Aaron {"/>"}
          </span>
          <span className="text-blue-500">
            {"<"}Gesmer {"/>"}
          </span>
        </span>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer hover:text-red-500">Home</li>
        <li className="p-4 hover:cursor-pointer hover:text-red-500">About</li>
        <li className="p-4 hover:cursor-pointer hover:text-red-500">Contact</li>
      </ul>
      <div className="hover:cursor-pointer block md:hidden" onClick={toggleNav}>
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
