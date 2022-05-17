/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

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

// ----- propTypes -----
Logo.propTypes = {
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Logo;
