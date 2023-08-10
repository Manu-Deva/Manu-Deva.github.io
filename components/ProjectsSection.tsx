import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

import SlideUp from "./SlideUp";

const projects = [
  {
    name: "ORCO App Executable",
    description:
      "The ORCO desktop app provides control and visualization for Origin Robots Company's prosthetic arm. Prototyped with Figma, built with electronJS and soon to be ported to React.",
    image: "/orcoThumbnail.png",
    github: "https://github.com/Origin-Robots-Company/AppDev",
    link: "https://www.originrobots.com/",
  },
  {
    name: "Ludobots",
    description:
      "I used the Ludobots MOOC and inspiration from Professor Sam Kriegman's Xenobots Lab to model the evolution of artifical life forms. Built with Python and the Pyrosim interface.",
    image: "/ludobotsThumbnail.png",
    github: "https://github.com/Manu-Deva/ludobots-md",
    link: "https://www.youtube.com/watch?v=BKG4CtIoVcM",
  },
  {
    name: "Portfolio Website",
    description:
      "This website was built with NextJS and TailwindCSS. It is a work in progress and I am always looking for ways to improve it!",
    image: "/portfolioThumbnail.png",
    github: "https://github.com/Manu-Deva/Manu-Deva.github.io",
    link: "https://manudeva.com",
  },
  {
    name: "TetrisC",
    description:
      "TetrisC is a rework of the popular Tetris game built in C++ with the ge211 game engine.",
    image: "/tetrisThumbnail.png",
    github: "https://github.com/Manu-Deva/tetrisC",
    link: "https://github.com/Manu-Deva/tetrisC",
  },
  {
    name: "Mag-2-Web",
    description:
      "A collection of digital editions of North By Northwestern's magazine articles, designed by me as an Interactives Editor for NbN.",
    image: "/mag2webThumbnail.png",
    github: "https://github.com/Manu-Deva/mag2web",
    link: "https://northbynorthwestern.com/winter-2023-magazine/",
  },
  {
    name: "OptiSkate",
    description:
      "A simple solution to sensing and illuminating the ground when skateboarding at night. Ideated, rapidly prototyped, developed, and tested over 10 weeks of market research for an engineering design class.",
    image: "/optiskateThumbnail.jpg",
    github: "https://github.com/Manu-Deva/tetrisC",
    link: "https://optiskate.notion.site/optiskate/OptiSkate-edfeacaf60084daf95c0c4714756cdc9",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-brown-1 border-0 rounded"></hr>
      </h1>
      <div className="grid grid-rows-4 grid-cols-1 gap-y-2 md:grid-rows-3 md:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:space-x-12">
                <div className="mt-8 mx-4">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>

                <div className="mt-12">
                  <h1 className="text-left text-4xl font-bold mb-6">
                    {project.name}
                  </h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>

                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub size={30} className="project-icon" />
                    </Link>

                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="project-icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
