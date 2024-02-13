/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Information Systems -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
            Indonesian Teknokrat University{" "}
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Belajar Dasar Pemrograman Web -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
            Dicoding Indonesia{" "}
          </span>
        </li>
        <li>
          UX Design Fundamentals -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
            Coursera{" "}
          </span>
        </li>
        <li>
          AWS Cloud Practitioner Essentials -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
            Amazon Web Services (AWS){" "}
          </span>
        </li>
        <li>
          Visual Elements of User Interface Design -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
            Coursera{" "}
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As an Information Systems graduate from the Indonesian Teknokrat
            University with in-depth knowledge and abilities in the fields of
            information technology and software development. During college, I
            had internship experience and academic projects, namely internship
            experience and academic project. I am sure that the combination of
            academic knowledge and a high enthusiasm for learning will help me
            develop and contribute to the world of work.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
