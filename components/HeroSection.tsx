"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt="Manu Deva"
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            {" "}
            Hi, I&#39;m Manu.
          </h1>
          <p className="text-lg mt-3 mb-6 md:text-2xl">
            {" "}
            I&#39;m a aspiring software engineer studying at{" "}
            <span className="font-semibold text-purple-800">
              Northwestern University
            </span>{" "}
            in Evanston, IL. Working on improving my full-stack development
            skills and minimizing the roadblocks in life.
          </p>
          <div className="flex flex-row space-x-4">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-brown-1 rounded shadow hover:bg-dark-brown-1"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <Link
              href={"https://github.com/Manu-Deva"}
              target="_blank"
              className="self-center"
            >
              <BsGithub size={30} className="project-icon" />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/manudeva/"}
              target="_blank"
              className="self-center"
            >
              <BsLinkedin size={30} className="project-icon" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/manudeva/"}
              target="_blank"
              className="self-center"
            >
              <BsFillFileEarmarkTextFill size={30} className="project-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
