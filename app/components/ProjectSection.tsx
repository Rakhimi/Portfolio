"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Next js E-Commerce Project",
    description: "This project is built using Next.js with TypeScript and Tailwind CSS. It uses Prisma as its database ORM and is connected to a Supabase database. Additionally, it integrates with Uploadthing as a file repository. With features like search, filter, and favorite, it provides a user-friendly experience. Plus, its responsive design ensures smooth viewing on any device.",
    image: "/images/CarilaPortfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rakhimi/carila",
  },
  {
    id: 1,
    title: "Korean Translation Electron Desktop App",
    description: "This app retrieve a lyric from genius API, translate it, word by word and line by line with Google Cloud Translation API. Store the translations in Json file in Google Drive folder",
    image: "/images/Electron.PNG",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/Rakhimi/Electron-Korean-Translation",
  },
  {
    id: 1,
    title: "Korean Lyrics Translation Web App",
    description: "This web app access youtube videos through Youtube API and retrieve the translated lyrics file for the chosen song from Google Drive Folder. No translation process happened here. The english translation of the korean word will popped up when the cursor hovers over it",
    image: "/images/koreanapp.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rakhimi/Korean_Translation",
  },
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="text-center h-screen flex flex-col justify-center">
      <div className="my-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
            />
          </motion.li>
        ))}
      </ul>

      </div>
    </section>
  );
};

export default ProjectsSection;