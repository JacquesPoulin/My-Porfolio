import React from "react";
// ----- Package dependencies -----
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  return (
    <form
      method="POST"
      action="https://getform.io/f/efe185bd-ad41-4c2c-90f2-8afb415dcc17"
      className="relative group flex flex-col max-w-[1000px] w-full"
    >
      <div name="Contact" className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-amber-500 bp4sub:text-2xl sm2:text-3xl">
          Contact
        </p>
      </div>
      <input
        className="bg-[#ccd6f6] p-2 placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="text"
        placeholder={t("nom")}
        name="nom"
        required
      />
      <input
        className="my-4 p-2 bg-[#ccd6f6] placeholder:italic text-slate-900 placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="email"
        placeholder={t("mail")}
        name="email"
        required
      />
      <textarea
        className="p-2 bg-[#ccd6f6] placeholder:italic placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-900 resize-none"
        name="message"
        rows="10"
        placeholder="Message"
        required
      />
      <button
        type="submit"
        className="text-white border-2 hover:bg-amber-600 hover:border-amber-50 px-4 py-3 my-8 mx-auto flex items-center rounded-lg"
      >
        {t("validez")}
      </button>
    </form>
  );
};

export default ContactForm;
