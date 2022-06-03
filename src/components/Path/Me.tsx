// ----- Packages Components -----
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiLaptop } from "react-icons/gi";
import { HiArrowNarrowDown } from "react-icons/hi";
// ----- React Icons -----
import { MdDeveloperMode } from "react-icons/md";
import Fade from "react-reveal/Fade";
// ----- Package dependencies -----
import { Link } from "react-scroll";

const Me = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  // ---- States : popover logic -----
  const [anchorEl, setAnchorEl] = useState(null);

  // ---- Functions : popover logic -----
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div
      name="Me"
      className="w-full h-screen flex flex-col justify-center items-center text-slate-50 bg-slate-900"
    >
      <Fade bottom>
        <div className="max-w-[1000px] lg2:max-w-[900px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right bp4sub:text-lg bp4sub:mt-96 pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-500 bp4sub:text-2xl sm2:text-3xl">
              {t("a_propos")}
            </p>
          </div>
          <div />
        </div>

        <div className="max-w-[1000px] w-full grid md:grid-cols-2 bp4sub: gap-8 px-4">
          <div className="flex flex-col justify-center items-center text-4xl md:text-right bp4sub:text-lg font-bold bp4sub:-mb-5 sm2:text-3xl">
            <p>{t("bienvenue")}</p>
            <div className="w-full flex justify-center my-auto">
              <div className="w-2/4 flex justify-end bp1:justify-center bp1:mt-7">
                <GiLaptop />
                <MdDeveloperMode className="ml-10" />
              </div>
            </div>
          </div>

          <div>
            <div className="tracking-wide text-justify bp4sub:text-sm bp4sub:pb-3">
              <p>{t("presentation_detail")}</p>
              <span className="text-amber-400 hover:text-amber-500">
                {" "}
                ReactJS
              </span>
              ,
              <span className="text-amber-400 hover:text-amber-500">
                {" "}
                Typescript
              </span>
              ,
              <span className="text-amber-400 hover:text-amber-500">
                {" "}
                NodeJS{" "}
              </span>
              {t("et")}
              <span className="text-amber-400 hover:text-amber-500">
                {" "}
                MySQL
              </span>
              .{t("presentation_detail2")}{" "}
              <Link
                activeClass="active"
                to="Portfolio"
                spy
                smooth
                isDynamic
                duration={1000}
              >
                <span
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  className="cursor-pointer text-amber-400 hover:text-amber-500"
                >
                  {t("realisation")}
                </span>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography sx={{ p: 1 }}> ➡️ {t("decouvrir")}</Typography>
                </Popover>
              </Link>
              <p>{t("presentation_detail3")}</p>
            </div>
          </div>
        </div>

        <Link to="Parcours" spy smooth isDynamic duration={1000}>
          <div className="w-full flex justify-center mt-28">
            <HiArrowNarrowDown className="w-10 h-10 cursor-pointer hover:text-amber-400 active:text-amber-600 bp2:hidden" />
          </div>
        </Link>
      </Fade>
      <div className="w-full h-screen bg-slate-900 bp4sub:mb-96 md2:hidden">
        {" "}
      </div>
    </div>
  );
};

export default Me;
