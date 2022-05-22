import React from "react";
import { Typewriter } from "react-simple-typewriter";

// ----- React icons -----
import { HiArrowNarrowRight } from "react-icons/hi";

const Presentation = () => {
  return (
    <div className="w-full h-screen">
      {/* ----- CONTAINER ----- */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-slate-50 leading-10">
        {/* ----- Name ----- */}
        <h1
          className="text-4xl md:text-8xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-600 via-amber-400 to-amber-100
            animate-text
            "
        >
          Jacques Poulin
        </h1>

        {/* ----- Job title ----- */}
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-100">
          Développeur Web & Mobile.
        </h2>

        {/* ----- Description ----- */}
        <p className=" text-base py-4 max-w-[700px] leading-6 text-justify">
          Je suis un développeur full-stack spécialisé dans la création de sites
          et applications web réactives et complètes. Un CODE{" "}
          <span className="text-amber-400 font-bold hinge">
            <Typewriter
              words={["propre", "maintenable"]}
              loop={0}
              typeSpeed={200}
              deleteSpeed={10}
              delaySpeed={3000}
            />
          </span>{" "}
          reste ma priorité.
        </p>

        {/* ----- Link button to my works ----- */}
        <div>
          <button
            type="button"
            className=" text-xs flex items-center group border-2 px-6 py-3 my-2 font-bold border-amber-500 rounded-lg tracking-widest transition-all ease-in-out duration-200 hover:bg-amber-600 hover:border-white active:bg-amber-50"
          >
            Parcours
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
