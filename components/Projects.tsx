import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      linkTo: 'https://crmen.surge.sh/',
      imageSrc: '/FirstProject.png',
      imageAlt: 'CRM Project',
      title: 'CRM',
      description:
        'Designed a modern UI website comprising more than 50 screens, with using React Js.Include React recharts,Gant-chart,React-Schedular for a Italian client',
      email: 'admin@gmail.com',
      password: '11223344',
    },
    {
      linkTo: 'https://pospwa5.surge.sh/',
      imageSrc: '/SecondProject.png',
      imageAlt: 'POS',
      title: 'POS',
      description:
        'Developed a web application on React Js, Works offline that use PWA technology.A full resturant Management Solution and already in production mode more over i am still working on project inhancement. ',
      email: 'admin@gmail.com',
      password: '12345',
    },
    {
      linkTo: 'https://www.niwali.com/',
      imageSrc: '/ThirdProject.png',
      imageAlt: 'VergeSystems',
      title: 'Niwali',
      description: 'Niwali website using React.js, Also includes a stripe payment gateway.',
    },
    {
      linkTo: 'https://super-mart.surge.sh',
      imageSrc: '/FouProject.png',
      imageAlt: 'Supermarcado',
      title: 'Supermarcado',
      description: 'Designed the modern UI for an ecommerce store.',
    },
  ];
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
              className="z-[1]"
            >
              <div className="flex-col w-[20rem] flex mb-5 items-center">
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
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
