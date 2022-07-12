/* eslint-disable import/no-unresolved */
import React from "react";

// ----- Package dependencies -----
import { useTranslation } from "react-i18next";

// ----- Packages Components -----
import Fade from "react-reveal/Fade";

// SWIPER package dependencies & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";

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
          <div className="mb-10 bp4:pt-20 sm2:mt-60 bp4sub:mt-64 bp4sub:pt-44 bp5:mt-96 bp5:pt-96">
            <p className="text-4xl font-bold inline border-b-4  border-amber-500 bp4sub:text-2xl">
              {t("competences")}
            </p>
          </div>
          <div>
            <p className="text-justify mb-7 hover:text-amber-400">
              {t("parcours")}
            </p>
          </div>
          {/* ----- LIST OF SKILLS ----- */}
          <div className="w-full h-full">
            {/* ----- 1st CARROUSEL ----- */}
            <div className="w-full flex justify-center my-7">
              <p
                className="text-lg font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-600 via-amber-400 to-amber-100
            animate-text"
              >
                {t("techniques")}
              </p>
            </div>
            <Swiper
              effect="cube"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              grabCursor
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              modules={[Autoplay, EffectCube]}
              className="bp1:w-52 bp5:w-40"
            >
              {skills?.map(({ id, img, label, alt }) => (
                <SwiperSlide key={id}>
                  <div>
                    <img
                      className="w-72 mx-auto py-5 bg-slate-900"
                      src={img}
                      alt={alt}
                    />
                    <p className="text-center pt-4">{label}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ----- 2nd CARROUSEL ----- */}
            <div className="w-full flex justify-center mt-16 mb-7">
              <p
                className="text-lg font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-600 via-amber-400 to-amber-100
            animate-text"
              >
                {t("personnelles")}
              </p>
            </div>
            <Swiper
              effect="cards"
              grabCursor
              modules={[EffectCards]}
              className="w-1/3 h-60 bp2:w-2/3"
            >
              <SwiperSlide className="bg-gradient-to-bl from-purple-600 via-cyan-700 to-white rounded-md flex justify-center items-center font-bold text-3xl lg2:text-xl bp3:text-lg">
                {t("Patience")}
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-br from-rose-800 via-orange-700 to-slate-700 rounded-md flex justify-center items-center text-4xl lg2:text-xl bp3:text-lg">
                {t("Curiosité")}
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-b from-cyan-500 via-neutral-900 to-stone-800 rounded-md flex justify-center items-center text-4xl lg2:text-xl bp3:text-lg">
                {t("Créativité")}
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-tr from-orange-500 via-black to-blue-700 rounded-md flex justify-center items-center text-4xl lg2:text-xl bp3:text-lg">
                {t("Empathie")}
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-tr from-green-900 via-emerald-800 to-red-900 rounded-md flex justify-center items-center text-3xl lg2:text-xl bp3:text-lg">
                {t("Communication")}
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-r from-blue-900 via-violet-600 to-indigo-500 rounded-md flex justify-center items-center text-4xl lg2:text-xl bp3:text-lg">
                {t("Esprit d'équipe")}
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skill;
