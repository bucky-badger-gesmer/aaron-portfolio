import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from  "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold">
        <span className="text-red-500">{"<>"}</span>Aaron Gesmer
        <span className="text-blue-500">{"</>"}</span>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="hover:cursor-pointer block md:hidden" onClick={toggleNav}>
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={isOpen ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-white ease-in-out duration-500" : "fixed left-[-100%]"}>
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;