import React from "react";

// ----- Packages Components -----
import Fade from "react-reveal/Fade";

// ----- Components -----
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >

      <Fade bottom>
        <div className="max-w-[700px] p-4 mx-auto flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28 md:mt-28">
          <Link
            activeClass="active"
            to="Home"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            <div className="full flex justify-end">
              <HiHome className=" absolute bp1:right-0 bp3:w-8 bp3:h-8 text-amber-400  w-10 h-10 transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50 " />
            </div>
          </Link>
          <ContactForm />
        </Fade>
        <div className="w-full flex justify-center mt-10">
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
          <p className="text-xs ml-2"> and lot of 💖</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
