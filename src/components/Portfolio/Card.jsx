import React, { useState } from "react";

// ----- package -----
import Tilt from "react-tilt";

// ----- Components -----
import Form from "./Form";
import Modale from "./Modale";

// ----- Datas -----
import works from "../../../data/works.js";

const Card = () => {
  // ----- UseStates -----
  const [selected, setSelected] = useState("Toutes");
  const [open, setOpen] = useState(false);

  // ----- Function : handle modal opening & closing -----
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mb-4 p-0 max-w-4xl md:flex md:flex-wrap md:w-full">
      <Form selected={selected} setSelected={setSelected} />
      {/* ----- CARD CONTAINER ----- */}
      {works &&
        works
          .filter(({ techno }) => techno.includes(selected) || !selected)
          .map(
            ({
              id,
              img,
              alt,
              title,
              desc,
              stack1,
              stack2,
              stack3,
              stack4,
              stack5,
              stack6,
              demo,
              code,
            }) => (
              <Tilt
                options={{
                  max: 8,
                  scale: 1,
                  reverse: true,
                  speed: 300,
                  perspective: 2000,
                }}
                className="group w-full m-h-full md:w-2/4"
                key={id}
              >
                <div className="w-full m-h-full border-2 border-white border-opacity-10 rounded-lg overflow-hidden shadow-lgc">
                  <div className="relative w-full overflow-hidden">
                    {/* ----- CARD Image ----- */}
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-72 object-cover object-center transition-all duration-1000 transform group-hover:scale-110"
                    />

                    {/* ----- CARD title ----- */}
                    <div className="w-full flex justify-between">
                      <div className="absolute top-6 left-6 inline-block pt-1.5 pb-1.5 px-2 rounded-md text-lg text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 ">
                        <button type="button" onClick={handleOpen}>
                          {title}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* ----- CARD modal ----- */}
                  <Modale open={open} handleClose={handleClose} />

                  {/* ----- CARD BODY ----- */}
                  <div className="my-8 max-h-48 py-3 px-8 flex flex-col justify-around items-center">
                    {/* ----- CARD title ----- */}
                    <div className="mt-4">
                      <h1 className="title-font text-2xl text-center font-thin text-slate-50 antialiased">
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
                      {stack6 && (
                        <img src={stack6} alt="" className="w-10 h-10 my-4" />
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
              </Tilt>
            )
          )}
    </div>
  );
};

export default Card;
