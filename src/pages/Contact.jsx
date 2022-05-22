import React from "react";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[700px] p-4 mx-auto flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28 md:mt-28">
        <ContactForm />
        <div className="w-full flex justify-center">
          <p className="text-xs"> made with</p>
          <img
            src="/assets/images/svg/react-svgrepo-com.svg"
            alt="logo REACT"
            className="w-4 h-4 ml-2"
          />
          <img
            src="../../public/assets/images/svg/tailwindcss-icon-svgrepo-com.svg"
            alt="logo REACT"
            className="w-4 h-4 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
