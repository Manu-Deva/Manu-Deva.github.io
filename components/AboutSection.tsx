import React from "react";
import Image from "next/image";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "TailwindCSS" },
  { skill: "Git" },
  { skill: "C++" },
  { skill: "Express" },
  { skill: "mongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-8 md:pb-36">
        <h1 className="text-center font-bold text-4xl">
          About me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-brown-1 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="about-title">Get to know me!</h1>
            <p>
              {" "}
              Hi, my name is Manu and I am a{" "}
              <span className="font-bold">{"curious"}</span>,
              <span className="font-bold"> {"passionate"} </span>, and
              <span className="font-bold"> {"dedicated"}</span> student based in
              Evanston, IL.
            </p>
            <br />
            <p>
              I'm a rising junior at Northwestern University, with a Computer
              Science major and Economics minor. I'm the current CTO of Student
              Holdings, a student-run business in Evanston, IL, and an app
              developer intern at Origin Robots Company, a robotics startup
              based in Evanston, IL.
            </p>
            <br />
            <p>
              I primarily code in Python, with experience in data structures,
              machine learning, and simple applications. I also have experience
              with C++ and Java, and computer systems programming in C and
              Linux. I hope to eventually integrate my interest in economics
              with computer science as a developer.
            </p>
            <br />
            <p>
              My hobbies and passions include basketball, gaming, clothing
              design, music production, art, and more. I'm always trying to
              integrate these passions with my skills in computer science and
              make them more fun!
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="about-title">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-cream-2 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image src="/hero-image.png" alt="" width={325} height={325} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
