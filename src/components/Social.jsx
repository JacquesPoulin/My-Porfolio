import React from "react";

// ----- All React Icons : fa, hi, bs ... -----
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-1/3 left-3 z-30">
      <ul className="z-30">
        {/* ----- LINKEDIN ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-blue-600 z-30">
          <a
            href="/"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        {/* ----- GITHUB ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-gray-600">
          <a
            href="/"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            Github <FaGithub size={30} />
          </a>
        </li>

        {/* ----- EMAIL ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-red-600">
          <a
            href="/"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>

        {/* ----- CV ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-lime-600">
          <a
            href="/"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            CV <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
