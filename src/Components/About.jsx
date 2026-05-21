import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

const About = () => {
  const { name, experienceYears, phone, email } = PORTFOLIO_DATA.personalInfo;
  
  const details = [
    { label: "Name", value: name },
    { label: "Experience", value: experienceYears },
    { label: "Freelance", value: "Available" },
    { label: "Phone", value: phone },
    { label: "Email", value: email },
    { label: "Languages", value: "Hindi, English" }
  ];

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="text-3xl font-bold text-white mb-6">About <span className="text-green-400">Me</span></h2>
      <div className="bg-zinc-800 rounded-lg p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {details.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-zinc-700 pb-2">
              <span className="text-neutral-500 min-w-[100px]">{item.label}</span>
              <span className="text-white text-sm md:text-base break-all">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;