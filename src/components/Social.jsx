/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// ----- All React Icons : fa, hi, bs ... -----
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// ----- files -----
import pdf from "../../public/assets/files/JacquesPoulin-cv-2022.pdf";

const Social = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-1/3 left-3 z-30">
      <ul className="z-30">
        {/* ----- LINKEDIN ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-blue-600 z-30">
          <a
            href="https://linkedin.com/in/jacquespoulin"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        {/* ----- GITHUB ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-gray-600">
          <a
            href="https://github.com/JacquesPoulin"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            Github <FaGithub size={30} />
          </a>
        </li>

        {/* ----- EMAIL ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-red-600">
          <a
            href="mailto: jacques.poulin64@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-lg font-semibold"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>

        {/* ----- CV ----- */}
        <li className="w-36 h-16 pr-2 flex rounded-r-xl justify-between items-center -ml-28 hover:-ml-3 duration-300 bg-lime-600">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-slate-50 pl-2 text-sm font-semibold"
          >
            CV (pdf)
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
