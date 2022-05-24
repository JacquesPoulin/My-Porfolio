import React from "react";

// ----- Package dependencies -----
import { HiHome } from "react-icons/hi";

// ----- Package dependencies -----
import { Link } from "react-scroll";

// ----- Components -----
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[700px] p-4 mx-auto flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28 md:mt-28">
        <Link
          activeClass="active"
          to="Home"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          <HiHome className="absolute right-32 w-10 h-10 text-amber-400 mr-4 cursor-pointer transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50 bp1:right-9 z-50" />
        </Link>
        <ContactForm />
        <div className="w-full flex justify-center">
          <p className="text-xs"> made with</p>
          <img
            src="/assets/images/svg/react-svgrepo-com.svg"
            alt="logo REACT"
            className="w-4 h-4 ml-2"
          />
          <img
            src="/assets/images/svg/tailwindcss-icon-svgrepo-com.svg"
            alt="logo REACT"
            className="w-4 h-4 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
