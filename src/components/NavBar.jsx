/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// ! ⬆️⬆️⬆️ The <div> element has a child <FaBars> icon element that allows keyboard interaction

// ----- REACT -----
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// ----- All React Icons : fa, hi, bs ... -----
import { FaBars, FaTimes } from "react-icons/fa";

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
    <nav className="fixed w-full h-20 flex justify-between items-center px-4 min-w-full">
      {/* >> Logo */}
      <div>
        <NavLink to="/">
          <img
            src="/assets/images/LOGO.png"
            style={{ width: "20rem" }}
            alt="logo du site"
            className="cursor-pointer bp4:w-56 bp4:h-48 -m-10"
          />
        </NavLink>
      </div>

      {/* >> Menu */}
      <ul className="hidden md:flex">
        {navLinksFr.map((link) => (
          <NavLink key={link.id} to={link.path}>
            <li className="flex justify-end text-amber-400 text-xl mr-6 font-secondary tracking-widest transition duration-500 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50">
              {link.title}
            </li>
          </NavLink>
        ))}
      </ul>

      {/* >> Hamburger logic */}
      <div
        role="button"
        onClick={toggleNavBar}
        className="md:hidden z-10 cursor-pointer"
      >
        {!isOpened ? (
          <button
            type="button"
            className="outline-none focus:outline-none active:outline-none"
          >
            <FaBars className="w-7 h-7 text-amber-400 transition-all hover:text-amber-600" />
          </button>
        ) : (
          <button
            type="button"
            className="outline-none focus:outline-none active:outline-none"
          >
            <FaTimes className="w-7 h-7 text-amber-400 hover:text-amber-600 transition-all" />
          </button>
        )}
      </div>

      {/* ----- MOBILE MENU ----- */}
      <ul
        className={
          !isOpened
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 text-slate-50 flex flex-col justify-center items-center"
        }
      >
        {navLinksFr.map((link) => (
          <NavLink key={link.id} to={link.path} onClick={closeMenu}>
            <li className="text-amber-400 hover:text-amber-600 active:text-amber-600 py-6 text-4xl">
              {link.title}
            </li>
          </NavLink>
        ))}
      </ul>

      {/* ----- SOCIAL ICONS----- */}

      <Social />
    </nav>
  );
};

export default NavBar;
