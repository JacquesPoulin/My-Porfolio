import React from "react";
import Me from "../components/Path/Me";
import Skill from "../components/Path/Skill";

const Path = () => {
  return (
    <div name="path" className="w-full h-screen text-slate-50 bg-slate-900">
      <Me />
      <Skill />
    </div>
  );
};

export default Path;
