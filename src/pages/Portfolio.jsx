import React from "react";
import Card from "../components/Portfolio/Card";

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28">
        <div className="mb-10">
          {/* ----- PAGE Title ----- */}
          <p className="text-4xl font-bold inline border-b-4  border-amber-500">
            Projets
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
