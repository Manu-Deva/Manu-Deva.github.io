import React from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

const skills = [
  // Languages
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "C++",
  "C",
  // Frameworks & Libraries
  "React",
  "Angular",
  "Spring",
  "Next.js",
  "Node.js",
  "TensorFlow",
  "PyTorch",
  // Dev Tools & Infrastructure
  "Git",
  "Linux",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "npm",
  "SQLite",
  "JUnit",
  "Postman",
  "Splunk",
];

export const metadata = {
  title: "About - Manu Deva",
  description:
    "Learn about Manu Deva's background, skills, interests, and professional journey as a software engineer.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <section className="mt-12 md:pt-8">
        <h1 className="text-center font-bold text-4xl mb-2 mt-6 pt-2 sm:mt-8 sm:pt-4">
          About me
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-brown-1 border-0 rounded"></hr>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="about-title">Get to know me!</h1>
            <p className="mb-6">
              I am an Associate Software Engineer at UKG in Lowell, MA, building
              full-stack systems for our Pro Suite, including workforce
              insights, monitoring, and timekeeping. I'm from Chicago, and
              graduated from Northwestern University (B.S. Computer Science,
              minor in Economics) in June 2025, and am currently pursing a
              Master's in Management at UIUC Gies College of Business. I've
              worked across backend, frontend, and MLOps — shipping features,
              improving observability, and automating tests and CI/CD. I also
              served as President of the{" "}
              <a
                href="https://ahanadanceproject.wixsite.com/ahana"
                className="text-brown-1 underline hover:text-brown-2 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahana Dance Project
              </a>
              , building community and cultural showcases at Northwestern.
            </p>

            {/* <h1 className="about-title">Current Focus</h1>
            <ul className="list-disc pl-6 mb-6">
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
            </ul> */}

            <h1 className="about-title">Interests & Hobbies</h1>
            <p className="mb-6">
              When I'm not coding, I enjoy reading, following professional
              sports, keeping up with my intersts in Philosophy and Economics,
              and staying active through dance and fitness. I'm currently
              training for a half marathon in May 2026, and hope to run the
              Chicago Marathon next fall! I'm a huge NBA fan, and am putting my
              faith in the Bulls to have a statement year (as well as my fantasy
              team).
            </p>

            <h1 className="about-title">Volunteer Work</h1>
            <p className="mb-6">
              During my time at Northwestern, I tried to build community as much
              as I did software. As President of the Ahana Dance Project, I
              organized and danced in South Asian cultural showcases and dance
              performances that brought together students from a wide spectrum
              of backgrounds — taught both myself and my peers how expression,
              teamwork, and shared experience connect people. I also served with
              the Society of Asian Scientists and Engineers (SASE), coordinating
              professional-development workshops and networking events that
              helped fellow students explore their paths in tech.
            </p>
          </div>

          <div className="md:w-1/2">
            <h1 className="about-title">My Skills</h1>
            <div className="grid grid-rows-5 grid-cols-5 justify-center md:justify-start mb-6 gap-y-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Icon iconName={skill} />
                  <p className="px-4 pb-1 mt-1 rounded font-semibold">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
            {/* <h1 className="about-title">Working On</h1>
            <div className="grid grid-rows-4 grid-cols-5 justify-center md:justify-start mb-4">
              {workingSkills.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <Icon iconName={item.skill} />
                    <p className="px-4 pb-1 mt-1 rounded font-semibold">
                      {item.skill}
                    </p>
                  </div>
                );
              })}
            </div> */}

            <h1 className="about-title">Currently Reading</h1>
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-stone-700 mb-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-44 rounded-lg shadow-lg flex items-center justify-center bg-white dark:bg-stone-700 overflow-hidden">
                    <img
                      src="/orbital.jpg"
                      alt="The Orbital Book cover"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Orbital
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                    by Samantha Harvey
                  </p>
                  <a
                    href="https://www.goodreads.com/user/show/99115546-manu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-brown-1 text-white rounded-lg hover:bg-dark-brown-1 transition-colors text-sm font-medium"
                  >
                    View on Goodreads
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
