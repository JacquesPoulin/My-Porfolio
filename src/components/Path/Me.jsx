import React from "react";

const Me = () => {
  return (
    <div
      name="me"
      className="w-full h-screen flex flex-col justify-center items-center text-slate-50 bg-slate-900"
    >
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="md:text-right bp4sub:-mb-4 bp4sub:text-lg bp4sub:mt-20 pb-8 pl-4">
          <p className="text-4xl bp3sub:text-2xl sm2:text-3xl md2:text-5xl font-bold inline border-b-4 border-amber-500">
            À propos
          </p>
        </div>
        <div />
      </div>
      <div className="max-w-[1000px] w-full grid md:grid-cols-2 bp4sub: gap-8 px-4">
        <div className="text-4xl md:text-right bp4sub:text-lg font-bold bp4sub:-mb-5">
          <p>Bonjour et bienvenue sur mon portfolio !</p>
        </div>
        <div>
          <p className="tracking-wide text-justify bp4sub:text-sm bp4sub:pb-3">
            Je suis Jacques Poulin, développeur Full-Stack, basé au Pays Basque.
            Je travaille principalement avec ReactJS, Typescript, NodeJS et
            MySQL. Je suis passionné par la conception de sites et applications
            Web. Mon amour du développement me permet d&apos;être polyvalent et
            adaptable aux tâches qui me sont confiées. Mon objectif est de
            toujours monter en compétences avec un code toujours plus propre et
            maintenable. N&apos;hésitez pas à découvrir mes
            <span className="cursor-pointer text-amber-300"> projets</span>
            ... Bonne visite !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
