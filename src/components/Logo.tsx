import React from "react";

// ! ----- icons datalist -----
import icons from "/assets/images/icons/icons.svg";

// >> Render a template to customize an icon choosed from the datalist
// ----- rendering -----
const Logo = ({ id, myStyle }) => {
  return (
    <svg className={myStyle}>
      <use xlinkHref={`${icons}#${id}`} />
    </svg>
  );
};

export default Logo;
