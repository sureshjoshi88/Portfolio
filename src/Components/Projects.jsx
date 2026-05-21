import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Featured <span className="text-green-400">Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <div key={project.id} className="bg-zinc-800 rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
              <p className="text-green-400 text-xs font-mono mb-4">{project.tech}</p>
              
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-green-400 hover:text-black text-white flex justify-center items-center transition">
                    <i className="fa-solid fa-arrow-right -rotate-45"></i>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-600 hover:bg-green-400 hover:text-black text-white flex justify-center items-center transition">
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;