import React from "react";

// ----- Package dependencies -----
import { Link } from "react-scroll";
import { HiArrowNarrowDown } from "react-icons/hi";
import { useTranslation } from "react-i18next";

// ----- Packages Components -----
import Fade from "react-reveal/Fade";

// ----- datas -----
import skills from "../../../data/skills";

const Skill = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  return (
    <div name="Parcours" className="w-full h-screen text-slate-50 bg-slate-900">
      {/* Container */}

      <div className="max-w-[1000px] lg2:max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full sm2:-mb-24">
        <Fade bottom>
          <div className="mb-10 bp4sub:mt-96 sm2:mt-60 bp4sub:pt-80">
            <p className="text-4xl font-bold inline border-b-4  border-amber-500 bp4sub:text-2xl">
              {t("competences")}
            </p>
          </div>

          {/* ----- list of skills ----- */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8 ">
            {skills?.map(({ id, img, alt }) => (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg"
                key={id}
              >
                <img className="w-20 mx-auto py-5" src={img} alt={alt} />
              </div>
            ))}
          </div>
          <Link to="Portfolio" spy smooth isDynamic duration={1000}>
            <div className="w-full flex justify-center mt-20">
              <HiArrowNarrowDown className="w-10 h-10 cursor-pointer hover:text-amber-400 active:text-amber-600 bp2:hidden" />
            </div>
          </Link>
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  bp4sub:mb-96">
            {" "}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skill;
