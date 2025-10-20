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
];

const workingSkills = [
  { skill: "Docker" },
  { skill: "Scala" },
  { skill: "Kotlin" },
  { skill: "Swift" },
  { skill: "MLOps" },
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
              I am an Associate Software Engineer at UKG building TypeScript
              service layers and Java backends for AI-driven workforce platforms.
              I graduated from Northwestern University (B.S. Computer Science,
              minor in Economics) in June 2025. I work across backend, frontend,
              and MLOps — shipping features, improving observability, and
              automating tests and CI/CD. Reach me at manu.deva@gmail.com.
            </p>
            <br />
            <h1 className="about-title">Current Focus</h1>
            <ul className="list-disc pl-6">
              <li>
                Develop TypeScript service layers and REST APIs in Java/Node for
                workforce insights.
              </li>
              <li>
                Implement CI/CD with Jenkins and Kubernetes; write integration
                tests with Playwright.
              </li>
              <li>
                Prototype full-stack features integrating LLMs and data
                pipelines.
              </li>
            </ul>
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
