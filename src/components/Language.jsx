import React, { useState } from "react";

// ----- Package dependencies -----
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// ----- Package : MUI components -----
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import languages from "../../data/languages";

const Language = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  // ----- STATES & variables-----
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // ----- Functions ------
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ml-96 -mt-1 flex justify-end items-center absolute">
      <Button onClick={handleClick}>
        <img
          src="/assets/images/svg/globe-svgrepo-com.svg"
          alt={t("icone")}
          className="w-5 h-5"
        />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map(({ code, img, languageName, countryCode }) => (
          <MenuItem key={countryCode} onClick={handleClose}>
            <button
              type="button"
              className="flex"
              onClick={() => i18next.changeLanguage(code)}
            >
              <img src={img} alt={t("drapeau")} className="w-5 h-5 mr-2" />
              {languageName}
            </button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Language;
