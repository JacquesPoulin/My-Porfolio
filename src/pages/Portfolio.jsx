import React from "react";

// ----- Package dependencies -----
import { useTranslation } from "react-i18next";

// ----- Packages Components -----
import Fade from "react-reveal/Fade";

// ----- Components -----
import Card from "../components/Portfolio/Card";

const Portfolio = () => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  return (
    <div
      name="Portfolio"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[1000px] lg2:max-w-[900px] mx-auto p-4 flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-44 bp4sub:mt-96">
        <Fade bottom>
          <div className="mt-16 mb-10 bp4sub:mt-6">
            {/* ----- PAGE Title ----- */}
            <p className="text-4xl font-bold inline border-b-4  border-amber-500 bp4sub:text-2xl">
              {t("projets")}
            </p>
          </div>
        </Fade>
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
