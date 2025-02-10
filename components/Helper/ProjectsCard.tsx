import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
  description: string;
}

const ProjectsCard = ({ title, tech1, tech2, tech3, tech4, image, description }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">{description}</p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-[2rem]">
          <button className="relative flex h-[50px] w-30 rounded-md items-center justify-center font-semibold overflow-hidden bg-blue-700 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">{tech1}</span>
          </button>
          <button className="relative flex h-[50px] w-30 rounded-md items-center justify-center font-semibold overflow-hidden bg-white text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">{tech2}</span>
          </button>
          <button className="relative flex h-[50px] w-30 rounded-md items-center justify-center font-semibold overflow-hidden bg-sky-500 text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">{tech3}</span>
          </button>
          <button className="relative flex h-[50px] w-30 rounded-md items-center justify-center font-semibold overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">{tech4}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;