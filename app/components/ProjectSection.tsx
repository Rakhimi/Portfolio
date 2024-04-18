"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Next js E-Commerce Project",
    description: "This is a Next js Typescript Tailwind Project. It use Prisma as Orm and connected to Supabase database. Connected to Uploadthing as file repository. It has many features like search, filter, favourite and a responsive design that adapts flawlessly to any device",
    image: "/images/CarilaPortfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rakhimi/carila",
    previewUrl: "https://carila.vercel.app/",
    video:"https://youtu.be/dKHpw7Cc7ik",
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
              previewUrl={project.previewUrl}
              video={project.video}
            />
          </motion.li>
        ))}
      </ul>

      </div>
    </section>
  );
};

export default ProjectsSection;