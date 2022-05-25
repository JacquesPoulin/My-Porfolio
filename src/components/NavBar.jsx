/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// ! ⬆️⬆️⬆️ The <div> element has a child <FaBars> icon element that allows keyboard interaction

// ----- REACT -----
import React, { useState } from "react";

// ----- React Icons : fa, hi, bs ... -----
import { FaBars, FaTimes } from "react-icons/fa";

// ----- Package dependencies -----
import { Link } from "react-scroll";

// ----- datas -----
import navLinksFr from "../../data/navLinksFr";
import Social from "./Social";

const NavBar = () => {
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
      <Link to="Home" spy smooth isDynamic duration={1000} onClick={closeMenu}>
        <div className="z-50">
          <img
            src="/assets/images/LOGO.png"
            style={{ width: "20rem" }}
            alt="logo du site"
            className="cursor-pointer bp4:w-52 -m-10 bp4:-m-14"
          />
        </div>
      </Link>

      {/* >> Menu */}
      <ul className="hidden md:flex z-50">
        {navLinksFr?.map(({ id, title }) => (
          <li
            key={id}
            className="text-amber-400 flex justify-end text-xl mr-6 font-secondary tracking-widest transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50"
          >
            <Link to={title} spy smooth isDynamic duration={1000}>
              {title && title}
            </Link>
          </li>
        ))}

        <a
          href="https://jacquespoulin.notion.site/RESUME-CV-2022-eea627d35cd74a93b68a0f0551b0c8be"
          target="_blank"
          rel="noreferrer"
          className="flex justify-end text-xl mr-6 font-secondary tracking-widest transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50 -ml-16 bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-500 to-amber-50 animate-text2"
        >
          CV
        </a>
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
            <FaTimes className="w-7 h-7 text-amber-400 hover:text-amber-600 transition-all z-50" />
          </button>
        )}
      </div>

      {/* ----- MOBILE MENU ----- */}
      <ul
        className={
          !isOpened
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 text-slate-50 flex flex-col justify-center items-center -z-50"
        }
      >
        {navLinksFr?.map(({ id, title, social, path }) => (
          <div role="button" onClick={closeMenu} key={id}>
            <li className="hover:text-amber-600 active:text-amber-600 py-6 text-4xl z-50">
              <Link
                to={title}
                spy
                smooth
                isDynamic
                duration={700}
                onClick={closeMenu}
              >
                {title}
              </Link>
              <button
                type="button"
                className="cursor-pointer text-amber-50 text-lg"
              >
                <a href={path} target="_blank" rel="noreferrer">
                  {social && social}
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
