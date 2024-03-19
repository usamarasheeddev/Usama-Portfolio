"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScroll, motion } from "framer-motion"
const Projects: React.FC = () => {

  type projects = {
    linkTo: string;
    imageSrc: string;
    title: string;
    imageAlt: string;
    description: string;
    email?: string;
    password?: string;
  };
  const projects: projects[] = [
    {
      linkTo: 'https://aipoem-generator.vercel.app/',
      imageSrc: '/poemGenerator.png',
      imageAlt: 'AI poem generator',
      title: 'AI poem generator',
      description:
        'An AI-powered web application that creates poems, Chat GPT-4 integration with Next JS ',

    },
    {
      linkTo: 'https://crmen.surge.sh/',
      imageSrc: '/FirstProject.png',
      imageAlt: 'CRM Project',
      title: 'CRM',
      description:
        'created a cutting-edge UI website with over 50 screens with React Js.Add Gantt charts, React schedules, and React charts for an Italian client.',
      email: 'admin@gmail.com',
      password: '11223344',
    },
    {
      linkTo: 'https://pospwa5.surge.sh/',
      imageSrc: '/SecondProject.png',
      imageAlt: 'POS',
      title: 'POS',
      description:
        `Created a React Js web application that utilises PWA technologies and functions offline.A comprehensive restaurant management system is currently in production, and I'm still working on project enhancement. `,
      email: 'admin@gmail.com',
      password: '12345',
    },
    {
      linkTo: 'https://www.niwali.com/',
      imageSrc: '/ThirdProject.png',
      imageAlt: 'VergeSystems',
      title: 'Niwali',
      description: 'React.js-powered Niwali e-commerce website with a Stripe payment mechanism integrated.',
    },
    {
      linkTo: 'https://super-mart.surge.sh',
      imageSrc: '/FouProject.png',
      imageAlt: 'Supermarcado',
      title: 'Supermarcado',
      description: 'Designed the modern UI for an ecommerce store.',
    },
  ];

  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 9.44", "1 1"]
  })
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl flex  flex-col items-center ">
        <div className="flex-row max-w-[45rem] flex-wrap flex mt-7">
          {projects.map((project, index) => (


            <Link
              key={index}
              href={project.linkTo}
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1] cursor-pointer"
            >
              <motion.div
                ref={ref}
                style={{
                  opacity: scrollYProgress,
                  scale: scrollYProgress
                }}
                className="flex-col w-[20rem] flex mb-5 items-center">
                <Image
                  src={project.imageSrc}
                  height={180}
                  width={300}

                  alt={project.imageAlt}
                />
                <div className="p-4">
                  <p className="text-white font-semibold text-xl">{project.title}</p>
                  <p className="text-gray-300 text-[11px]">{project.description}</p>
                  {project?.email && <p className="text-white text-[11px]">Email: {project.email}</p>}
                  {project?.password && (
                    <p className="text-white text-[11px]">Password: {project.password}</p>
                  )}
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
