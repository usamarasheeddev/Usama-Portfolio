"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {

  type Project = {
    linkTo: string;
    imageSrc: string;
    title: string;
    imageAlt: string;
    description: string;
    email?: string;
    password?: string;
  };

  const projects: Project[] = [
    {
      linkTo: 'https://www.socialtip.io/',
      imageSrc: '/socialTip.jpg',
      imageAlt: 'Social tip',
      title: 'Social Tip',
      description: 'Social Tip lets you turn everyday moments into real cash rewards by sharing your love for your favourite brands.',
    },
    {
      linkTo: 'https://aipoem-generator.vercel.app/',
      imageSrc: '/poemGenerator.png',
      imageAlt: 'AI poem generator',
      title: 'AI poem generator',
      description: 'AI-powered web app that generates poems using GPT-4 and Next JS.',
    },
      {
      linkTo: 'https://www.niwali.com/',
      imageSrc: '/ThirdProject.png',
      imageAlt: 'VergeSystems',
      title: 'Niwali',
      description: 'E-commerce site built with React.js, integrated with Stripe for secure payments.',
    },
    {
      linkTo: 'https://crmen.surge.sh/',
      imageSrc: '/FirstProject.png',
      imageAlt: 'CRM Project',
      title: 'CRM',
      description: 'Built a UI with 50+ screens using React JS, adding Gantt charts and React schedules for an Italian client.',
      email: 'admin@gmail.com',
      password: '11223344',
    },
    {
      linkTo: 'https://pos.thewebconcept.com/',
      imageSrc: '/SecondProject.png',
      imageAlt: 'POS',
      title: 'POS',
      description: 'Developed a React JS web app using PWA technology, enabling offline usage for restaurant management.',
      email: 'admin@gmail.com',
      password: '12345',
    },
  
    {
      linkTo: 'https://super-mart.surge.sh',
      imageSrc: '/FouProject.png',
      imageAlt: 'Supermarcado',
      title: 'Supermarcado',
      description: 'Designed the UI for an e-commerce store with modern, responsive features.',
    },
  ];



  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleProjects((prev) => {
                const newVisibleProjects = [...prev];
                newVisibleProjects[index] = true;
                return newVisibleProjects;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className=" w-full  flex justify-center items-center">
        <div className="flex  flex-wrap justify-around mt-7 px-4 md:px-0 container mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.linkTo}
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1] cursor-pointer w-full max-w-lg mb-5 transform hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                ref={(el) => (projectRefs.current[index] = el)}
                className={`project-card flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visibleProjects[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.imageSrc}
                  height={180}
                  width={500}
                  alt={project.imageAlt}
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-white font-semibold text-xl">{project.title}</p>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                  {project?.email && <p className="text-white text-sm mt-2">Email: {project.email}</p>}
                  {project?.password && <p className="text-white text-sm mt-2">Password: {project.password}</p>}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
