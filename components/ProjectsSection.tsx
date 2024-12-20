import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import {
  PythonOriginal,
  JavascriptOriginal,
  CplusplusOriginal,
  COriginal,
  ReactOriginal,
  Html5Original,
  Css3Original,
  JavaOriginal,
  TailwindcssOriginal,
  FigmaOriginal,
  LinuxOriginal,
  GitOriginal,
  NpmOriginalWordmark,
  NodejsOriginal,
  NextjsOriginal,
  ElectronOriginal,
  ExpressOriginal,
  FlaskOriginal,
  NumpyOriginal,
  FirebasePlain,
  MatlabOriginal,
  MongodbOriginal,
  MysqlOriginal,
  TypescriptOriginal,
  ThreejsOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  DockerOriginal,
  KotlinOriginal,
  SwiftOriginal,
  FirebaseOriginal,
} from "devicons-react";

import SlideUp from "./SlideUp";

const projects = [
  {
    name: "SuggestME",
    description:
      "SuggestME is a full-stack app that lets users explore artists, view shows, and get music recommendations. Built with a Next.js frontend and a serverless AWS Lambda backend, it integrates the Spotify, Ticketmaster, and OpenWeatherMap APIs for seamless playlist management and personalized music discovery.",
    image: "/suggestMeThumbnail.png",
    github: "https://github.com/Manu-Deva/suggestME",
    link: "",
    primary: "AWS",
    secondary: "Next.js",
  },
  {
    name: "RetroScan",
    description:
      "An embedded systems project using the Microbit v2 microcontroller and various sensors to enable RFID tagging and display of vinyl and VHS media. This project features custom-written libraries for the Nordic nRF52833 SoC utilizing I2C, SPI, and ADC communication, written in C.",
    image: "/retroscanThumbnail.jpg",
    github: "https://github.com/Manu-Deva/RetroScan",
    link: "https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2024/microcontroller-system-design-students-demo-final-projects.html",
    primary: "C",
    secondary: "Linux",
  },
  {
    name: "Tamagotchi",
    description:
      "A web app deployed on Next.js and Firebase that accurately digitizes the Tamagotchi experience! It features a persistent state powered by Context API and FireStore, interactive actions and logging, and authenticated multiple-user support. Written in TypeScript and styled with Tailwind.",
    image: "/tamagotchiThumbnail.png",
    github: "https://github.com/Manu-Deva/tamagotchi-396",
    link: "https://my-pet-app-e2418.web.app/",
    primary: "TypeScript",
    secondary: "Firebase",
  },
  {
    name: "PAM",
    description:
      "A virtual AI receptionist for the Northwestern Computer Science department that streamlines access to information on professors and department events. PAM is powered by a custom-made LLM using OpenAI, Hugging Face, and SQlite3, deployed as a Flask application.",
    image: "/pamThumbnail.png",
    github: "https://github.com/sibster146/PAM-NU-Comp-Sci-AI-Secretary/",
    link: "https://vimeo.com/908564340?share=copy",
    primary: "Python",
    secondary: "SQLite",
  },
  {
    name: "IntervU",
    description:
      "A Python program that uses computer vision algorithms and Tensorflow models to track an applicant’s body posture, expressions, and eye movements to encourage appropriate body language during an interview, with a Flask backend and React frontend in progress.",
    image: "/intervuThumbnail.png",
    github: "https://github.com/peterchwl/intervU",
    link: "https://devpost.com/software/intervu-42fwji",
    primary: "Python",
    secondary: "React",
  },

  {
    name: "OptiSkate",
    description:
      "A simple solution to sensing and illuminating the ground when skateboarding at night. Ideated, rapidly prototyped, developed, and tested over 10 weeks of market research for an engineering design class.",
    image: "/optiskateThumbnail.jpg",
    github: "https://github.com/Manu-Deva/tetrisC",
    link: "https://optiskate.notion.site/optiskate/OptiSkate-edfeacaf60084daf95c0c4714756cdc9",
    primary: "Python",
    secondary: "RaspberryPi",
  },
  {
    name: "Netflix Redesign",
    description:
      "A Figma prototyping of a redesigned interface for Netflix based on user interviews, implementing dynamic UI and HCI design standards.",
    image: "/netflixThumbnail.png",
    github: "https://github.com/Origin-Robots-Company/AppDev",
    link: "https://www.figma.com/proto/zw6Z6wLrxZhhuzg8Xji45i/A8%3A-Final-Prototype?node-id=15-4550&starting-point-node-id=15%3A4550&t=qc9uclMYRPxWWg5E-1&mode=design",
    primary: "Figma",
    secondary: "",
  },

  {
    name: "ORCO App Executable",
    description:
      "The ORCO desktop app provides control and visualization for Origin Robots Company's prosthetic arm. Prototyped with Figma, built with electronJS and React.",
    image: "/orcoThumbnail.png",
    github: "https://github.com/Origin-Robots-Company/AppDev",
    link: "https://www.originrobots.com/",
    primary: "React",
    secondary: "Electron",
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
    name: "TetrisC",
    description:
      "TetrisC is a rework of the popular Tetris game built in C++ with the ge211 game engine.",
    image: "/tetrisThumbnail.png",
    github: "https://github.com/Manu-Deva/tetrisC",
    link: "https://github.com/Manu-Deva/tetrisC",
    primary: "C++",
  },
  {
    name: "Portfolio Website",
    description:
      "This website was built with NextJS and TailwindCSS. It is a work in progress and I am always looking for ways to improve it!",
    image: "/portfolioThumbnail.png",
    github: "https://github.com/Manu-Deva/Manu-Deva.github.io",
    link: "https://manudeva.com",
    primary: "Next.js",
    secondary: "TailwindCSS",
  },

  {
    name: "Mag-2-Web",
    description:
      "A collection of digital editions of North By Northwestern's magazine articles, designed by me as an Interactives Editor for NbN.",
    image: "/mag2webThumbnail.png",
    github: "https://github.com/Manu-Deva/mag2web",
    link: "https://northbynorthwestern.com/winter-2023-magazine/",
    primary: "HTML",
    secondary: "Figma",
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
                    <Icon iconName={project.primary ?? ""} size={30} />
                    {project.secondary && (
                      <Icon iconName={project.secondary ?? ""} size={30} />
                    )}
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
