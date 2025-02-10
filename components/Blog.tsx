import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-cyan-300">Blog</span> and News
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <BlogCard
            title="Fullstack Developer Roadmap"
            comment="4"
            date="24 January 2024"
            image="/images/f.png"
            link="https://roadmap.sh/full-stack"
          />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-delay="200">
          <BlogCard
            title="Starting With React JS"
            comment="8"
            date="26 January 2024"
            image="/images/r.png"
            link="https://www.w3schools.com/react/react_getstarted.asp"
          />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-delay="400">
          <BlogCard
            title="Time Management In Tech Job"
            comment="4"
            date="29 January 2024"
            image="/images/tt.webp"
            link="https://blog.get-merit.com/four-tips-to-mange-time-at-your-tech-job/"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
