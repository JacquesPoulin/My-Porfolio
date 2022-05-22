import React from "react";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28 md:mt-28">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
