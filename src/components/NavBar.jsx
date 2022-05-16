import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import navLinksFr from "../../data/navLinksFr";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="absolute flex min-w-full h-16">
      {/* DESKTOP NavBar */}
      <nav className="flex items-center justify-between h-16 min-w-full pt-10 flex-nowrap">
        <NavLink to="/">
          {/* LOGO */}
          <img
            src="../../public/assets/images/svg/LOGO-jacques-poulin.svg"
            alt="logo du site"
            className="w-80 h-w-80 cursor-pointer -ml-10 "
          />
        </NavLink>
        <ul className="flex flex-nowrap">
          {navLinksFr.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <li className="flex justify-end text-amber-400 text-xl mr-6 font-main tracking-widest transition duration-200 ease-out hover:text-amber-600 active:text-amber-600 flex-nowrap">
                {link.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <Transition
        show={isOpened}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* MOBILE MENU */}
        {isOpened && (
          <div className="absolute right-0 w-full rounded-md p-7 md:hidden top-24 lg:hidden bg-neutral-900">
            <ul className="items-center justify-center text-3xl text-center text-slate-50 font-exo">
              {navLinksFr.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsOpened(false)}
                >
                  <li className="mt-2 mb-8 font-medium hover:underline">
                    {link.title}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default NavBar;
