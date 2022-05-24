import React from "react";

// ----- Package dependencies -----
import { Typewriter } from "react-simple-typewriter";
import { Animated } from "react-animated-css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div name="Home" className="w-full h-screen">
      {/* ----- CONTAINER ----- */}
      <div className="max-w-[1000px] lg2:max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full text-slate-50 leading-10">
        {/* ----- Name ----- */}
        <Animated
          animationIn="rotateIn"
          animationOut="rotateIn"
          animationInDelay={500}
          isVisible
        >
          <h1
            className="text-4xl md:text-6xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-600 via-amber-400 to-amber-100
            animate-text bp4sub:text-2xl
            "
          >
            Jacques Poulin
          </h1>
        </Animated>

        {/* ----- Job title ----- */}
        <Animated
          animationIn="rotateInUpLeft"
          animationOut="rotateInUpLeft"
          animationInDelay={1200}
          isVisible
        >
          <h2 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-100 bp4sub:text-xl">
            Développeur Web & Mobile.
          </h2>
        </Animated>
        {/* ----- Description ----- */}
        <Animated
          animationIn="flipInX"
          animationOut="flipInX"
          animationInDelay={2100}
          isVisible
        >
          <p className="text-base py-4 max-w-[700px] leading-6 text-justify bp4sub:text-sm">
            Je suis un développeur full-stack spécialisé dans la création de
            sites et applications web réactives et complètes. Un code{" "}
            <span className="text-amber-400 font-bold hinge">
              <Typewriter
                words={[
                  "MAINTENABLE",
                  "PROPRE",
                  "LISIBLE",
                  "EFFICACE",
                  "PERFORMANT",
                ]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>{" "}
            reste ma priorité.
          </p>
        </Animated>

        {/* ----- Link button to my works ----- */}
        <Animated
          animationIn="fadeIn"
          animationOut="fadeIn"
          animationInDelay={2800}
          animationInDuration={3000}
          isVisible
        >
          <div>
            <Link
              activeClass="active"
              to="Me"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              <button
                type="button"
                className=" text-lg flex items-center group border-2 px-6 py-3 my-2 font-bold border-amber-500 rounded-lg tracking-widest transition-all ease-in-out duration-200 hover:bg-amber-600 hover:border-white active:bg-amber-50 bp4sub:text-sm bp4sub:px-3 bp4sub:py-3 bp4sub:my-2 bp4sub:hidden"
              >
                Bienvenue
                <span className="group-hover:rotate-90 duration-500">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default Presentation;
