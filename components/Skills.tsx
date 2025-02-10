import React from "react";
import SkillsCard from "./Helper/SkillsCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black" id="skills">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explore Popular <span className="text-cyan-300">Skills</span>{" "}
            & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            With expertise in graphic design, frontend web development, and
            video editing, I craft visually stunning and highly functional
            digital experiences. Whether it&apos;s designing eye-catching graphics,
            developing seamless user interfaces, or editing engaging videos, I
            bring creativity and technical precision to every project.
            Additionally, my work in faceless YouTube content and AI-generated
            visuals allows me to create compelling and innovative media that
            captivates audiences.
          </p>
          <button className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillsCard
                title="HTML"
                image="/images/html.svg"
                percentage="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="200"
            >
              <SkillsCard
                title="CSS"
                image="/images/css.svg"
                percentage="40%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="400"
            >
              <SkillsCard
                title="JavaScript"
                image="/images/js.svg"
                percentage="30%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="600"
            >
              <SkillsCard
                title="TypeScript"
                image="/images/ts.svg"
                percentage="30%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="800"
            >
              <SkillsCard
                title="Node JS"
                image="/images/node.svg"
                percentage="20%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1000"
            >
              <SkillsCard
                title="Next JS"
                image="/images/next.svg"
                percentage="30%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1200"
            >
              <SkillsCard
                title="Python"
                image="/images/python.svg"
                percentage="10%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1400"
            >
              <SkillsCard
                title="Video Editing"
                image="/images/images.png"
                percentage="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1600"
            >
              <SkillsCard
                title="Graphics Designing"
                image="/images/g.png"
                percentage="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1800"
            >
              <SkillsCard
                title="Logo Designing"
                image="/images/l1.jpg"
                percentage="80%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
