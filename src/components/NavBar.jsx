import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinksFr from "../../data/navLinksFr";

// ----- components -----
import Logo from "./Logo";

const NavBar = () => {
  // ----- STATES -----
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="absolute flex min-w-full h-16">
      {/* ----- LAPTOP VERSION ----- */}
      <nav className="flex items-center justify-between h-16 min-w-full pt-10 flex-nowrap">
        <NavLink to="/">
          {/* ----- WEBSITE LOGO ----- */}
          <img
            src="/assets/images/LOGO.png"
            alt="logo du site"
            className="w-80 h-w-80 cursor-pointer -ml-10 bp3: bp4:w-56 bp4:h-48 "
          />
        </NavLink>
        {/* ----- navbar list ----- */}
        <ul className="flex flex-nowrap bp1:hidden">
          {navLinksFr.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <li className="flex justify-end text-amber-400 text-xl mr-6 font-secondary tracking-widest transition duration-200 ease-out hover:text-amber-600 focus:outline-none focus:border-amber-600 active:text-amber-50">
                {link.title}
              </li>
            </NavLink>
          ))}
          <img
            src="/assets/images/svg/uk-flag.svg"
            alt="drapeau anglais"
            className="w-7 h-7 mr-6 cursor-pointer transition-all duration-500 ease-in-out hover:scale-125"
          />
        </ul>
        {/* ----- BURGER BUTTON LOGIC ----- */}
        {!isOpened ? (
          <button
            type="button"
            className=" hidden w-24 justify-around transition-all active:outline-none focus:outline-none bp1:flex bp1:mr-2"
            onClick={() => setIsOpened(!isOpened)}
          >
            <Logo
              myStyle="w-8 h-8 text-amber-400 hover:text-amber-600"
              name="logos-menu-burger"
              id="logos-menu-burger"
            />
            <img
              src="/assets/images/svg/uk-flag.svg"
              alt="drapeau anglais"
              className="w-7 h-7 cursor-pointer"
            />
          </button>
        ) : (
          <button
            type="button"
            className=" hidden w-24 justify-around transition-all active:outline-none focus:outline-none bp1:flex bp1:mr-2"
            onClick={() => setIsOpened(!isOpened)}
          >
            <Logo
              myStyle="w-8 h-8 text-amber-400 hover:text-amber-600"
              name="cross-menu-burger"
              id="cross-menu-burger"
            />
            <img
              src="/assets/images/svg/uk-flag.svg"
              alt="drapeau anglais"
              className="w-7 h-7 cursor-pointer"
            />
          </button>
        )}
      </nav>

      {/* ----- MOBILE VERSION : menu ----- */}
      {isOpened && (
        <div className="absolute right-0 w-full h-96 p-7 top-24 backdrop-filter backdrop-blur-lg">
          <ul className="items-center justify-center text-3xl text-center text-slate-50 font-secondary">
            {navLinksFr.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsOpened(false)}
              >
                <li className="flex justify-between text-amber-400 text-xl mr-6 font-secondary tracking-widest transition duration-200 ease-out hover:text-amber-600 active:text-amber-600 border-b-2 py-4 bp3sub:py-2 bp3sub:text-sm">
                  {link.title}
                  <button
                    type="button"
                    className="bg-amber-400 hover:bg-amber-600"
                  >
                    <Logo
                      myStyle="w-8 h-8 text-amber-400 hover:text-amber-600 bp3sub:w-6 bp3:h-6"
                      name="right-arrow"
                      id="right-arrow"
                    />
                  </button>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
