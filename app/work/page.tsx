import React from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Work Experience - Manu Deva",
  description:
    "Explore Manu Deva's professional experience including roles at UKG, Nyck AI, and various internships and leadership positions.",
};

const workExperiences = [
  {
    company: "UKG",
    title: "Associate Software Engineer",
    type: "Full-time",
    duration: "August 2025 - Present",
    location: "Lowell, MA",
    description: [
      "Deliver Java, Node.js, and Typescript platforms powering AI-driven workforce management insights",
      "Implement automated test infrastructure and environment deployment with Kubernetes and Jenkins CI/CD",
      "Develop 15+ integration tests with Playwright, validating parallel API execution and component rendering",
      "Utilize Splunk and Arize AI in log analysis and query observability for a 95% production defect closure rate",
      "Enhance Bryte agent accuracy across 7+ intents through sample validation and LLM response templating",
    ],
    skills: [
      "Java",
      "TypeScript",
      "Angular",
      "Jenkins",
      "Kubernetes",
      "Playwright",
      "Splunk",
      "LLM",
    ],
  },
  {
    company: "Nyck AI",
    title: "Founding Backend Engineer",
    type: "Part-time",
    duration: "April 2025 - July 2025",
    location: "Evanston, IL",
    description: [
      "Build production-ready infrastructure using Node.js (Next.js) and PydanticAI to enable agent modularity",
      "Integrate REST APIs with memory persistence and custom orchestration for multi-agent workflows",
      "Design PostgreSQL schemas in Supabase to support ERP-style pricing, inventory, and procurement logic",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "AI/ML",
    ],
  },
  {
    company: "SONIC Research Group",
    title: "Applied Data Science Intern",
    type: "Internship",
    duration: "June 2024 - December 2024",
    location: "Evanston, IL",
    description: [
      "Deployed a multi-label sentiment analysis classifier by fine-tuning a RoBERTa model using Hugging Face",
      "Wrote ETL scripts for data ingestion and preprocessing to support labeling and model training in PyTorch",
      "Boosted classification accuracy by 10–15% through hyperparameter tuning and continuous dataset rebalancing",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Hugging Face",
      "RoBERTa",
      "ETL",
    ],
  },
  {
    company: "Student Holdings",
    title: "Chief Technology Officer",
    type: "Part-time",
    duration: "October 2022 - May 2024",
    location: "Evanston, IL",
    description: [
      "Delivered automated reporting pipelines in Excel, Zapier, and Tableau to monitor a $5,000+ budget",
      "Enabled data-driven analysis and business strategy to meet quarterly KPIs across 4 student-run businesses",
      "Mentored a cross-functional Agile team of analysts and contributed to over $100,000 in annual revenue",
    ],
    skills: [
      "Excel",
      "Zapier",
      "Tableau",
      "Agile",
      "Project Management",
      "Data Analysis",
    ],
  },
  {
    company: "Origin Robots Company",
    title: "Frontend Software Engineer Intern",
    type: "Part-time",
    duration: "April 2023 - September 2023",
    location: "Chicago, IL",
    description: [
      "Built a cross-platform React & Electron desktop app for real-time control of custom-PCB TPU prosthetics",
      "Prototyped responsive UI components in Figma and integrated low-latency serial communication protocols",
      "Maintained technical docs and company website using Sanity CMS, helping secure $5,000+ in NSF funding",
    ],
    skills: [
      "React",
      "Electron",
      "Figma",
      "JavaScript",
      "Sanity CMS",
      "Hardware Integration",
    ],
  },
  {
    company: "Ahana Dance Project",
    title: "President",
    type: "Leadership",
    duration: "June 2024 - May 2025",
    location: "Evanston, IL",
    description: [
      "Oversee executive board responsibilities and alignment with cultural goals",
      "Coordinate logistics for the organization and performances, including venue bookings and practice space reservations",
      "Manage recruitment and engagement of new and existing students and organize community building events",
    ],
    skills: [
      "Event Management",
      "People Management",
      "Budgeting",
      "Leadership",
    ],
  },
  {
    company: "North by Northwestern",
    title: "Interactives Editor",
    type: "Part-time",
    duration: "September 2023 - April 2024",
    location: "Evanston, IL",
    description: [
      "Lead and collaborate with a team of writers and developers to create interactive stories using HTML and JavaScript modules to engage an audience of 8,000 students with digital multimedia journalism",
    ],
    skills: [
      "HTML5",
      "JavaScript",
      "Graphic Design",
      "Team Management",
      "Project Management",
    ],
  },
  {
    company: "Nala Robotics",
    title: "Summer Software Engineer Intern",
    type: "Internship",
    duration: "June 2021 - May 2022",
    location: "Arlington Heights, IL",
    description: [
      "Collaborate with cross-functional teams, including hardware engineers and data scientists, to integrate software with AI-driven robotic systems",
      "Design and implement machine learning models in JAX and PyTorch to enhance food preparation accuracy and consistency",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Kafka",
      "Computer Vision",
      "Machine Learning",
    ],
  },
];

export default function WorkPage() {
  // Skills that have icons available
  const skillsWithIcons = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "C",
    "React",
    "Node.js",
    "Angular",
    "Electron",
    "Git",
    "Figma",
    "Docker",
    "AWS",
    "PostgreSQL",
    "Supabase",
    "Linux",
    "PyTorch",
    "Jenkins",
    "Kubernetes",
    "Splunk",
    "Kafka",
    "Playwright",
  ];

  const renderSkillBadge = (skill: string, skillIdx: number) => {
    const hasIcon = skillsWithIcons.includes(skill);

    if (hasIcon) {
      return (
        <span
          key={skillIdx}
          className="flex items-center gap-2 bg-brown-1 text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          <Icon iconName={skill} size={20} />
          {skill}
        </span>
      );
    } else {
      return (
        <span
          key={skillIdx}
          className="bg-brown-1 text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      );
    }
  };
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <section className="mt-12 md:pt-8">
        <h1 className="text-center font-bold text-4xl mb-2 mt-6 pt-2 sm:mt-8 sm:pt-4">
          Work Experience
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-brown-1 border-0 rounded"></hr>

        <div className="space-y-8 mt-8">
          {workExperiences.map((work, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-stone-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {work.title}
                  </h2>
                  <h3 className="text-xl font-semibold text-brown-1 mb-2">
                    {work.company}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <span className="bg-gray-100 dark:bg-stone-700 px-2 py-1 rounded">
                      {work.type}
                    </span>
                    <span>{work.duration}</span>
                    <span>{work.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  {work.description.map((desc, descIdx) => (
                    <li key={descIdx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {work.skills.map((skill, skillIdx) =>
                  renderSkillBadge(skill, skillIdx)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
