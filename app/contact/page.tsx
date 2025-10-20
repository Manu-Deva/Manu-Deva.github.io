import React from "react";
import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export const metadata = {
  title: "Contact - Manu Deva",
  description:
    "Get in touch with Manu Deva for opportunities, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <section className="mt-12 md:pt-8">
        <h1 className="text-center font-bold text-4xl mb-2 mt-6 pt-2 sm:mt-8 sm:pt-4">
          Contact
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-brown-1 border-0 rounded"></hr>

        <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-8">
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Let's Connect!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in new opportunities, collaborations, and
              conversations about anything, from sports to technology to the
              weather. Whether you have a project in mind, want to discuss
              ideas, or just want to say hello, I'd love to hear from you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a
              href="mailto:manu.deva@gmail.com"
              className="flex items-center space-x-3 bg-brown-1 text-white px-6 py-3 rounded-lg hover:bg-dark-brown-1 transition-colors"
            >
              <HiMail size={24} />
              <span className="font-semibold">manu.deva@gmail.com</span>
            </a>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Manu-Deva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-stone-700 rounded-lg hover:bg-gray-200 dark:hover:bg-stone-600 transition-colors"
              >
                <BsGithub
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/manudeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-stone-700 rounded-lg hover:bg-gray-200 dark:hover:bg-stone-600 transition-colors"
              >
                <BsLinkedin
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>

              <a
                href="/Manu_Deva_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-stone-700 rounded-lg hover:bg-gray-200 dark:hover:bg-stone-600 transition-colors"
              >
                <BsFillFileEarmarkTextFill
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Response time: Usually within 24 hours</p>
            <p>Location: Boston, Massachusetts</p>
          </div>
        </div>
      </section>
    </main>
  );
}
