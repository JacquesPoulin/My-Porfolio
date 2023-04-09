import React, { useState } from "react";

// ----- Package dependencies -----
import Tilt from "react-tilt";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

// ----- React Icons -----
import { HiArrowNarrowUp } from "react-icons/hi";

// ----- Components -----
import Form from "./Form";
import Modale from "./Modale";

// ----- Datas -----
import works from "../../../data/works.js";

const Card = () => {
  // ----- The translation -----
  const { t } = useTranslation();

  // ----- States -----
  const [selected, setSelected] = useState(t("tous"));
  const [open, setOpen] = useState(false);

  // ----- Functions : handle modal opening & closing -----
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="max-w-[1000px] mb-4 p-0 md:flex md:flex-wrap md:w-full">
      <Form
        selected={selected}
        setSelected={setSelected}
        className="bp1:z-50"
      />
      {/* ----- CARD CONTAINER ----- */}
      {works.some((work) => work.techno.includes(selected)) ? (
        works
          .filter(({ techno }) => techno.includes(selected) || !selected)
          .map(
            ({
              id,
              img,
              alt,
              title,
              finished,
              desc,
              stack1,
              stack2,
              stack3,
              stack4,
              stack5,
              stack6,
              status,
              demo,
              code,
              codeFront,
              codeBack,
              codeAdmin,
            }) => (
              <Tilt
                options={{
                  max: 8,
                  scale: 1,
                  reverse: true,
                  speed: 300,
                  perspective: 2000,
                }}
                className="group w-full md:w-2/4"
                key={id}
              >
                <div className="w-full h-full border-2 border-white border-opacity-10 rounded-lg overflow-hidden shadow-lgc">
                  <div className="relative w-full overflow-hidden">
                    {/* ----- CARD Image ----- */}
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-72 object-cover object-center transition-all duration-1000 transform group-hover:scale-110"
                    />

                    {/* ----- CARD title ----- */}
                    <div className="w-full flex justify-between">
                      <div className="absolute top-6 left-6 inline-block pt-1.5 pb-1.5 px-2 rounded-md text-lg text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 hover:bg-white">
                        <button type="button" onClick={handleOpen}>
                          {title && title}
                        </button>{" "}
                        <p> {t(status && status)}</p>
                        <p> {finished && finished}</p>
                      </div>
                    </div>
                  </div>
                  {/* ----- CARD modal ----- */}
                  <Modale open={open} handleClose={handleClose} />

                  {/* ----- CARD BODY ----- */}
                  <div className="my-8 max-h-48 py-3 px-8 flex flex-col justify-around items-center">
                    {/* ----- CARD title ----- */}
                    <div className="mt-4">
                      <h1 className="title-font text-2xl text-center font-thin text-slate-50 antialiased bp2:text-lg">
                        {t(desc)}
                      </h1>
                    </div>
                    {/* ----- CARD stacks ------ */}
                    <div className="w-full flex justify-evenly my-3">
                      {stack1 && (
                        <img
                          src={stack1}
                          alt=""
                          className="w-10 h-10 my-4 bp2:w-8 bp2:h-8"
                        />
                      )}
                      {stack2 && (
                        <img
                          src={stack2}
                          alt=""
                          className="w-10 h-10 my-4 bp2:w-8 bp2:h-8"
                        />
                      )}
                      {stack3 && (
                        <img
                          src={stack3}
                          alt=""
                          className="w-10 h-10 my-4 bp2:w-8 bp2:h-8"
                        />
                      )}
                      {stack4 && (
                        <img src={stack4} alt="" className="w-10 h-10 my-4" />
                      )}
                      {stack5 && (
                        <img
                          src={stack5}
                          alt=""
                          className="w-10 h-10 my-4 bp2:w-8 bp2:h-8"
                        />
                      )}
                      {stack6 && (
                        <img
                          src={stack6}
                          alt=""
                          className="w-10 h-10 my-4 bp2:w-8 bp2:h-8"
                        />
                      )}
                    </div>

                    {/* ----- CARD action buttons ----- */}
                    <div className="w-full flex justify-evenly">
                      {demo && (
                        <a
                          href={demo && demo}
                          target="_blank"
                          rel="noreferrer"
                          className="self-start p-2 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-300 to-blue-500 font-medium no-underline transform hover:scale-105 animate-text bp2:text-sm"
                        >
                          {demo && <button type="button">DEMO</button>}
                        </a>
                      )}
                      {code && (
                        <a
                          href={code && code}
                          target="_blank"
                          rel="noreferrer"
                          className="self-center p-2 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-300 to-blue-500 font-medium no-underline transform hover:scale-105 animate-text bp2:text-sm"
                        >
                          {code && <button type="button">CODE</button>}
                        </a>
                      )}

                      {codeFront && (
                        <a
                          href={codeFront && codeFront}
                          target="_blank"
                          rel="noreferrer"
                          className="self-center p-2 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-300 to-blue-500 font-medium no-underline transform hover:scale-105 animate-text bp2:text-sm"
                        >
                          {codeFront && (
                            <button type="button">CODE (Front)</button>
                          )}
                        </a>
                      )}

                      {codeBack && (
                        <a
                          href={codeBack && codeBack}
                          target="_blank"
                          rel="noreferrer"
                          className="self-center p-2 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-300 to-blue-500 font-medium no-underline transform hover:scale-105 animate-text bp2:text-sm"
                        >
                          {codeBack && (
                            <button type="button">CODE (Back)</button>
                          )}
                        </a>
                      )}

                      {codeAdmin && (
                        <a
                          href={codeAdmin && codeAdmin}
                          target="_blank"
                          rel="noreferrer"
                          className="self-center p-2 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-300 to-blue-500 font-medium no-underline transform hover:scale-105 animate-text bp2:text-sm"
                        >
                          {codeAdmin && (
                            <button type="button">CODE (Admin)</button>
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            )
          )
      ) : (
        <>
          <p className="w-full flex justify-center mt-20 bp2:hidden">
            👷🚧 Un projet utilisant : {selected} est en cours ... et bientôt
            disponibles !
          </p>
          <p className="w-full flex justify-center mt-20 bp2:hidden">
            Pour en savoir plus ➡️
            <a
              href="https://github.com/JacquesPoulin"
              target="_blank"
              rel="noreferrer"
              className="pl-4"
            >
              ici
            </a>
          </p>
        </>
      )}
      <div className="w-full flex justify-center mt-20 bp2:hidden">
        <Link to="Home" spy smooth isDynamic duration={1000}>
          <HiArrowNarrowUp className="w-10 h-10 cursor-pointer hover:text-amber-400 active:text-amber-600 bp2:hidden" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
