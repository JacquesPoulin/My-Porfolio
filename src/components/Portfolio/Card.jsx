import React from "react";

// ----- Datas -----
import works from "../../../data/works.js";

const Card = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28">
      <div className="mb-10">
        {/* ----- PAGE Title ----- */}
        <p className="text-4xl font-bold inline border-b-4  border-amber-500">
          Projets
        </p>
      </div>
      <div className="mb-4 p-0 max-w-4xl md:flex md:flex-wrap md:w-full">
        {/* ----- CARD CONTAINER ----- */}
        {works?.map(
          ({
            img,
            title,
            desc,
            stack1,
            stack2,
            stack3,
            stack4,
            stack5,
            demo,
            code,
          }) => (
            <div className="group w-full m-h-full md:w-2/4 border-2 border-white border-opacity-10 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full overflow-hidden">
                {/* ----- CARD Image ----- */}
                <img
                  src={img}
                  alt=""
                  className="w-full h-72 object-cover object-center transition-all duration-300 transform group-hover:scale-110"
                />

                {/* ----- CARD stack ----- */}
                <div className="w-full flex justify-evenly">
                  <div className="absolute top-6 left-6 inline-block pt-1.5 pb-1.5 px-2 rounded-md text-lg text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 ">
                    {title}
                  </div>
                </div>
              </div>

              {/* ----- CARD BODY ----- */}
              <div className="my-8 max-h-48 py-3 px-8 flex flex-col justify-around items-center">
                {/* ----- CARD title ----- */}
                <div className="mt-4">
                  <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
                    {desc}
                  </h1>
                </div>
                {/* ----- CARD stacks ------ */}
                <div className="w-full flex justify-evenly my-3">
                  {stack1 && (
                    <img src={stack1} alt="" className="w-10 h-10 my-4" />
                  )}
                  {stack2 && (
                    <img src={stack2} alt="" className="w-10 h-10 my-4" />
                  )}
                  {stack3 && (
                    <img src={stack3} alt="" className="w-10 h-10 my-4" />
                  )}
                  {stack4 && (
                    <img src={stack4} alt="" className="w-10 h-10 my-4" />
                  )}
                  {stack5 && (
                    <img src={stack5} alt="" className="w-10 h-10 my-4" />
                  )}
                </div>

                {/* ----- CARD action buttons ----- */}
                <div className="w-full flex justify-evenly">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start p-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
                  >
                    <button type="button">DEMO</button>
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start p-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
                  >
                    <button type="button">CODE</button>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Card;
