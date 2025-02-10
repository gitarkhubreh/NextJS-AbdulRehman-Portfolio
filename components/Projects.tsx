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
        tech1="View Project"
        image="/images/p1.PNG"
        description="A simple countdown timer application built using React, Next.js, and Tailwind CSS. It allows users to set a timer and track time dynamically."
        projectLink="https://next-js-count-down-timer.vercel.app/" // Add project link here
      />
      <ProjectsCard
        title="Weather-Widget-App"
        tech1="View Project"
        image="/images/p.PNG"
        description="A weather widget app that fetches real-time weather data and displays it in a user-friendly interface with dynamic styling."
        projectLink="https://next-js-weather-widget-app-azure.vercel.app/"
      />
      <ProjectsCard
        title="Calculator"
        tech1="View Project"
        image="/images/ca.PNG"
        description="A fully functional calculator application developed using React and Tailwind CSS, supporting basic arithmetic operations."
        projectLink="https://next-js-calculator-gamma.vercel.app/"
      />
      <ProjectsCard
        title="Calendar"
        tech1="View Project"
        image="/images/calender.PNG"
        description="A dynamic calendar application that allows users to view, add, and manage events with an intuitive interface."
        projectLink="https://next-js-calendar-2025.vercel.app/"
      />
      <ProjectsCard
        title="Online Furniture Store"
        tech1="View Project"
        image="/images/pro1.PNG"
        description="Explore stylish, durable furniture that transforms your home into a haven of comfort and elegance."
        projectLink="https://ecommerce-website-three-ashy.vercel.app/"
      />
      <ProjectsCard
        title="Our Team Member Portfolio"
        tech1="View Project"
        image="/images/rm.PNG"
        description="I designed and developed this portfolio using basic programming techniques to showcase my skills, creativity, and passion for web development in a simple yet effective way."
        projectLink="https://rameez-portfolio-gold.vercel.app/"
      />
    </div>
  );
};

export default Projects;
