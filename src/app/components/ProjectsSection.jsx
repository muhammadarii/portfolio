"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce SMKN SPP Lampung",
    description: "Build E-Commerce website for SMKN SPP Lampung",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "https://sikepmart.smknspplampung.sch.id/",
  },
  {
    id: 2,
    title: "Fits App",
    description: "Build the website with React.js for my personal project",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "https://fits-apps-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "MyPortfolio",
    description: "Build the website with Next.js for my personal project",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Management Systems",
    description: "Build the website with Laravel for my personal project",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Movie App",
    description: "Build the website with React.js for my personal project",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Contact App",
    description: "Build the website with React.js for my personal project",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/muhammadarii",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
