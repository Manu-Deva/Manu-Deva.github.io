import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThreejsOriginal, JavascriptOriginal } from "devicons-react";
import Icon from "./Icon";
const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C++" },
  { skill: "C" },
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Figma" },
  { skill: "TailwindCSS" },
  { skill: "Java" },
  { skill: "Linux" },
  { skill: "Git" },
  { skill: "SQLite" },
  { skill: "AWS" },
  { skill: "npm" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Electron" },
  { skill: "Express" },
  //   { skill: "numpy" },
  //   { skill: "Firebase" },
  //   { skill: "MATLAB" },
];

const workingSkills = [
  //   { skill: "ThreeJS" },
  { skill: "Docker" },
  { skill: "Scala" },
  { skill: "Kotlin" },
  { skill: "Swift" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="mt-12 md:pt-8 ">
        <h1 className="text-center font-bold text-4xl">
          About me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-brown-1 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="about-title">Get to know me!</h1>
            <p>
              {" "}
              Hi, I'm Manu and I attend Northwestern University, Evanston,
              Illinois. I'm a{" "}
              <span className="font-bold">{"problem solver"}</span>, and an{" "}
              <span className="font-bold">{"inquisitive"}</span>,
              <span className="font-bold"> {"enthusiastic"}</span>, and
              <span className="font-bold"> {"committed"}</span> student. As a
              graduating senior, I am pursuing a major in Computer Science,
              complemented by a minor in Economics.
            </p>
            <br />
            <p>
              I'm the current CTO of{" "}
              <Link
                href="https://www.studentholdings.org/"
                className="font-bold"
              >
                Student Holdings
              </Link>
              , a student-run business catering to Northwestern students in
              Evanston, IL, as well as a Data Science Intern with the{" "}
              <Link
                href="https://sonic.northwestern.edu/"
                className="font-bold"
              >
                SONIC Research Group
              </Link>{" "}
              at Northwestern. At SONIC I specialize in building custom
              sentiment analysis tools using machine learning for social
              networks research.
            </p>
            <br />
            <p>
              I was also an app developer intern at Origin Robots Company, a
              robotics startup focused on creating prostheses for bionics
              research and amputees.
            </p>
            <br />
            <p>
              I code primarily in Python for data structures, machine learning,
              and app development, with experience in C++ and Java. I also do
              computer systems programming in C and Linux and app development
              with React, Javascript, and other frameworks. I hope to integrate
              my interest in economics with computer science as a developer.
            </p>
            <br />
            <p>
              My hobbies and passions include basketball, gaming, clothing
              design, reading, dance, and more. I'm always trying to integrate
              these passions with my skills in computer science and make them
              more fun!
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="about-title">My Skills</h1>
            <div className="grid grid-rows-4 grid-cols-5 justify-center md:justify-start mb-6 gap-y-2">
              {skills.map((item, idx) => {
                return (
                  <div className="flex flex-col items-center">
                    <Icon iconName={item.skill} />
                    <p
                      key={idx}
                      className="px-4 pb-1 mt-1 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  </div>
                );
              })}
            </div>
            <h1 className="about-title">Working On</h1>
            <div className="grid grid-rows-4 grid-cols-5 justify-center md:justify-start mb-6 ">
              {workingSkills.map((item, idx) => {
                return (
                  <div className="flex flex-col items-center">
                    <Icon iconName={item.skill} />
                    <p
                      key={idx}
                      className="px-4 pb-1 mt-1 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
