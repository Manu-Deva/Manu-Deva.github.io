import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

export const metadata = {
  title: "Manu Deva - Software Engineer",
  description:
    "Associate Software Engineer at UKG building AI-driven workforce platforms. Northwestern CS graduate with experience in full-stack development, AI/ML, and scalable systems.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <section className="hero flex flex-col items-center md:flex-row md:items-start [@media(min-width:1920px)]:mb-8">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/newheadshot.jpeg"
            alt="Manu Deva"
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I'm Manu.
          </h1>
          <p className="text-lg mt-3 mb-1 md:text-xl font-semibold text-neutral-700">
            Associate Software Engineer at UKG | Northwestern University '25
          </p>

          <p className="text-md mt-3 mb-6 md:text-2xl">
            I build full‑stack systems - focusing on AI integrations for
            business development, production reliability and observability, and
            fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/work"
              className="text-neutral-100 font-semibold px-6 py-3 bg-brown-1 rounded shadow hover:bg-dark-brown-1 transition-colors text-center"
            >
              View My Work
            </Link>
            <Link
              href="/projects"
              className="text-brown-1 font-semibold px-6 py-3 border-2 border-brown-1 rounded shadow hover:bg-brown-1 hover:text-white transition-colors text-center"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="text-neutral-100 font-semibold px-6 py-3 bg-sage-green-1 rounded shadow hover:bg-sage-green-2 transition-colors text-center"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-row space-x-4 justify-center md:justify-start">
            <a
              href="https://github.com/Manu-Deva"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center"
            >
              <BsGithub size={30} className="project-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/manudeva/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center"
            >
              <BsLinkedin size={30} className="project-icon" />
            </a>
            <a
              href="/Manu_Deva_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center"
            >
              <BsFillFileEarmarkTextFill size={30} className="project-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Northwestern University */}
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-stone-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
                    <img
                      src="/NUlogo.png"
                      alt="Northwestern University Logo"
                      className="object-fill w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Northwestern University '25
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Minor in Economics
                  </p>
                </div>
              </div>
            </div>

            {/* UIUC Gies */}
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-stone-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center">
                    <img
                      src="/uiuclogo.png"
                      alt="UIUC Gies College of Business Logo"
                      className="object-fill w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    UIUC Gies College of Business
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                    Master of Science in Management
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    In Progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-stone-700">
              <h3 className="text-lg font-semibold mb-2 text-brown-1">
                Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building scalable Java and Node.js services with REST APIs,
                microservices architecture, and cloud deployment.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-stone-700">
              <h3 className="text-lg font-semibold mb-2 text-brown-1">
                AI/ML Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing AI-driven features and ML pipelines, from model
                training to production deployment and monitoring.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-stone-700">
              <h3 className="text-lg font-semibold mb-2 text-brown-1">
                DevOps & Testing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implementing CI/CD pipelines, automated testing strategies, and
                infrastructure as code with Jenkins and Kubernetes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
