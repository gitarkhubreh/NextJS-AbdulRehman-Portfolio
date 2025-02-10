import React from "react";
import ProjectsCard from "./Helper/ProjectsCard";

const Projects = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900" id="projects">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-cyan-300">Projects</span>
        </h1>
      </div>
      <ProjectsCard
        title="CountDown Timer"
        tech1="React"
        tech2="Next.js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p1.PNG"
        description="A simple countdown timer application built using React, Next.js, and Tailwind CSS. It allows users to set a timer and track time dynamically."
      />
      <ProjectsCard
        title="Weather-Widget-App"
        tech1="React"
        tech2="Next.js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p.PNG"
        description="A weather widget app that fetches real-time weather data and displays it in a user-friendly interface with dynamic styling."
      />
      <ProjectsCard
        title="Calculator"
        tech1="React"
        tech2="Next.js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/ca.PNG"
        description="A fully functional calculator application developed using React and Tailwind CSS, supporting basic arithmetic operations."
      />
      <ProjectsCard
        title="Calendar"
        tech1="React"
        tech2="Next.js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/calender.PNG"
        description="A dynamic calendar application that allows users to view, add, and manage events with an intuitive interface."
      />
    </div>
  );
};

export default Projects;
