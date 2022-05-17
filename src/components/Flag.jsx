import React from "react";
import { NavLink } from "react-router-dom";

const Flag = () => {
  return (
    <div className="w-ful flex justify-center">
      <NavLink to="/home">
        <button type="button">
          <img
            src="/assets/images/svg/french-flag.svg"
            alt="Drapeau Français"
            className="w-24 h-w-24 m-10 bp3sub:w-14 bp3sub:h-14 bp3sub:m-6 bp4:w-14 bp4:h-14 animate-pulse"
          />
          <p className="text-orange-50">Bienvenue</p>
        </button>
      </NavLink>

      <NavLink to="/home">
        <button type="button">
          <img
            src="/assets/images/svg/uk-flag.svg"
            alt="Drapeau Français"
            className="w-24 h-w-24 m-10 bp3sub:w-14 bp3sub:h-14 bp3sub:m-6 bp4:w-14 bp4:h-14 animate-pulse"
          />
          <p className="text-orange-50">Welcome</p>
        </button>
      </NavLink>
    </div>
  );
};

export default Flag;
