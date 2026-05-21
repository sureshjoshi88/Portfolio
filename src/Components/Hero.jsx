import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

// Images import kar lijiye (path apne folder structure ke hisaab se check kar lena)
import mainImg from "../constants/images/suresh.png";
import crBig from "../constants/images/cr-big.png";
import crSmall from "../constants/images/cr-small.png";
import ResumePdf from "../constants/resume-pdf/resume.pdf";

const Hero = () => {
  const { name, role, aboutText } = PORTFOLIO_DATA.personalInfo;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10">
      
      {/* Left Section: Text & Details */}
      <div className="order-2 md:order-1 animate__animated animate__fadeInLeft">
        <p className="text-xl text-neutral-500 mb-2">{role}</p>
        <h1 className="text-4xl text-white mb-2">Hello I'm</h1>
        <h2 className="text-5xl lg:text-6xl text-green-400 font-bold mb-4">{name}</h2>
        <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
          {aboutText}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={ResumePdf} 
            download 
            className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-full transition-all flex items-center gap-2"
          >
            DOWNLOAD CV <i className="fa-solid fa-download"></i>
          </a>
          <div className="flex gap-3">
            {PORTFOLIO_DATA.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-green-400 text-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition-all"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Animated Image */}
      <div className="order-1 md:order-2 flex justify-center animate__animated animate__zoomIn">
        {/* Container for the rotating animation */}
        <div className="relative w-[290px] h-[290px] lg:w-[380px] lg:h-[380px] rounded-full flex items-center justify-center">
          
          {/* 1. Main Static Image */}
          <img 
            src={mainImg} 
            alt={name} 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-10" 
          />
          
          {/* 2. Big Ring - Rotating Backwards (20 seconds) */}
          <img 
            src={crBig} 
            alt="" 
            className="absolute top-0 left-0 w-full h-full animate-[spin_20s_linear_infinite_reverse] z-20 pointer-events-none" 
          />
          
          {/* 3. Small Ring - Rotating Forwards (8 seconds) */}
          <img 
            src={crSmall} 
            alt="" 
            className="absolute top-0 left-0 w-full h-full animate-[spin_8s_linear_infinite] z-30 pointer-events-none" 
          />
          
        </div>
      </div>
      
    </div>
  );
};

export default Hero;