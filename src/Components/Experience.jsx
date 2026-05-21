import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

const Experience = () => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-white mb-6">My <span className="text-green-400">Experience</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.experience.map((exp, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg p-6 hover:border hover:border-green-400 transition-all">
            <h6 className="text-green-400 text-sm mb-2">{exp.year}</h6>
            <h3 className="text-xl text-white mb-2">{exp.role}</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-neutral-400 m-0 text-sm">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;