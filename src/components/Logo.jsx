import React from "react";
import PropTypes from "prop-types";
import icons from "../../public/assets/images/icons/icons.svg";

const Logo = ({ id, myStyle }) => {
  // ------------------------------------------
  // >> COMPONENT TO CALL SVG IN COMPONENTS
  // ------------------------------------------
  return (
    <svg className={myStyle}>
      <use xlinkHref={`${icons}#${id}`} />
    </svg>
  );
};

Logo.propTypes = {
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Logo;
