/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// ! ⬆️⬆️⬆️ The <div> element has a child <FaBars> icon element that allows keyboard interaction

import React, { useState } from "react";

// ----- React Icons : fa, hi, bs ... -----
import { FaBars, FaTimes } from "react-icons/fa";

// ----- Package dependencies -----
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

// ----- Package components -----
import { HideBetween } from "react-hide-on-scroll";

// ----- Component -----
import Language from "./Language";
import Social from "./Social";

// ----- datas -----
import navLinksFr from "../../data/navLinksFr";

const NavBar = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  // ----- STATES -----
  const [isOpened, setIsOpened] = useState(false);

  // ----- FUNCTIONS -----
  const toggleNavBar = () => setIsOpened(!isOpened);
  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <nav className="absolute top-0 w-full h-20 flex justify-between items-center px-4 min-w-full z-50">
      {/* >> Logo */}

      <div className="z-50">
        <HideBetween
          height
          inverse
          startHeight={0}
          endHeight={1}
          showOnPageInit
        >
          <div className="absolute flex justify-center mt-8 sm5:mt-16 sm5:ml-28 md:hidden z-50">
            <Language />
          </div>
        </HideBetween>

        <img
          src="/assets/images/LOGO.png"
          style={{ width: "20rem" }}
          alt="logo du site"
          className="bp4:w-52 -m-10 bp4:-m-14"
          disabled
        />
      </div>

      {/* >> Menu */}
      <ul className="hidden md:flex z-50">
        {navLinksFr?.map(({ id, title }) => (
          <li
            key={id}
            className="text-amber-400 flex justify-end text-xl ml-6 font-secondary tracking-widest transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50"
          >
            <Link to={title} spy smooth isDynamic duration={1000}>
              {t(title && title)}
            </Link>
          </li>
        ))}

        <Language />
      </ul>

      {/* ----- Hamburger logic ----- */}
      <div
        role="button"
        onClick={toggleNavBar}
        className="md:hidden z-50 cursor-pointer"
      >
        {!isOpened ? (
          <button
            type="button"
            className="outline-none focus:outline-none active:outline-none z-50"
          >
            <FaBars className="w-7 h-7 text-amber-400 transition-all hover:text-amber-600 z-50" />
          </button>
        ) : (
          <button
            type="button"
            className="outline-none focus:outline-none active:outline-none z-50"
          >
            <FaTimes className="w-7 h-7 text-amber-400 hover:text-amber-600 transition-all z-40" />
          </button>
        )}
      </div>

      {/* ----- MOBILE MENU ----- */}
      <ul
        div
        className={
          !isOpened
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-slate-900 text-slate-50 flex flex-col justify-center items-center -z-50"
        }
      >
        {navLinksFr?.map(({ id, title, social, path }) => (
          <div role="button" onClick={closeMenu} key={id}>
            <li className="text-amber-400 hover:text-amber-600 active:text-amber-600 py-6 text-4xl z-50">
              <Link
                to={title}
                spy
                smooth
                isDynamic
                duration={700}
                onClick={closeMenu}
              >
                {t(title && title)}
              </Link>
              <button
                type="button"
                className="cursor-pointer text-amber-50 text-lg"
              >
                <a href={path} target="_blank" rel="noreferrer">
                  {t(social && social)}
                </a>
              </button>
            </li>
          </div>
        ))}
      </ul>

      {/* ----- SOCIAL ICONS----- */}
      <Social />
    </nav>
  );
};

export default NavBar;
