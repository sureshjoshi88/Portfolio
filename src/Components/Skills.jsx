import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

function Skills() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-white mb-6">My <span className="text-green-400">Skills</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <div key={index} className="group relative h-32 flex flex-col justify-center items-center rounded-md bg-zinc-800 hover:border hover:border-green-400 transition-all cursor-pointer">
            <i className={`${skill.icon} text-5xl text-white group-hover:text-green-400 transition-colors`}></i>
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition-colors">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;