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
              <span className="font-bold"> </span>, and
              <span className="font-bold">{" determined"}</span> student based
              in Evanston, IL.
            </p>
            <br />
            <p>
              I graudeffnganrjgnajgnjesgnjgjktg tg sgnj ntgjnjn jngjgnggr and
              have been working gnr rgn jjg nesnj nrj r ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keepm y busy,
              incldung rading nfnf runnign and gadening and bulding and sewing I
              am always looking for new thing and epxries to sod and love to
              keep myslef enageed ein ieniet nthings.
            </p>
            <br />
            <p>
              {" "}
              I believe that you should{" "}
              <span className="font-bold text-green-800">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for technoloy
              and a desire to always push the limtis of what is possible. I am
              excited to enter a career of growth and new opportunities and
              can&#39;t wait to build my skills even more.
            </p>
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
