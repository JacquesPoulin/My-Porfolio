import React from "react";

// ----- datas -----
import skills from "../../../data/skills";

const Skill = () => {
  return (
    <div
      name="Parcours"
      className="w-full h-screen text-slate-50 bg-slate-900 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4  border-amber-500">
            Compétences
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
      </div>
    </div>
  );
};

export default Skill;
