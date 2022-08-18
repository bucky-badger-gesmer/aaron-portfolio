import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-['Poppins']">
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-Poppins cursor-pointer">
            <h2>
              <span className="text-red-400">{"<"}</span>
              <span className="">Aaron</span>
              <span className="text-red-400">{"/>"}</span>
              <span className="text-blue-400">{"<"}</span>
              <span>Gesmer</span>
              <span className="text-blue-400">{"/>"}</span>
            </h2>
          </span>

          {/* add icon for opening and closing here */}
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              HOME
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              ABOUT
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <h1 className="text-3xl font-bold underline text-green-400">
          Hi! My name is Aaron!<br />
          <button onClick={() => setCount(count + 1)}>Click Me</button>: <>{count}</>
        </h1>
      </div>
    </div>
  );
}
