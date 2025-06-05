import React from 'react';

export default function ProjectTimeLine() {
  type Project = {
    linkTo: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
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
      description: 'Social Tip empowers you to transform everyday moments into real cash rewards by sharing your passion for your favorite brands. I’m proud to have contributed to the Social Tip team, including the development of its microservice architecture.',
    },
    {
      linkTo: 'https://pos.thewebconcept.com/',
      imageSrc: '/SecondProject.png',
      imageAlt: 'POS',
      title: 'POS',
      description: 'Developed a React JS web app using PWA technology, enabling offline functionality for restaurant management. The app includes user management, role-based access, and time-based daily sales and purchase reports.',
      email: 'admin@gmail.com',
      password: '12345',
    },
    {
      linkTo: 'https://aipoem-generator.vercel.app/',
      imageSrc: '/poemGenerator.png',
      imageAlt: 'AI poem generator',
      title: 'AI poem generator',
      description: 'An AI-powered web app that seamlessly generates creative poems using GPT-4 and Next.js, offering an innovative and dynamic poetry generation experience.',
    },
    {
      linkTo: 'https://patio-greenly-dashboard.vercel.app/',
      imageSrc: '/patio.jpg',
      imageAlt: 'Patio Greenly',
      title: 'Patio Greenly',
      description: 'Patio Greenly is an app offering expert gardening services in Dubai, simplifying outdoor space management.',
      email: '+923091524895',
      password: '11223344',
    },
      {
      linkTo: 'https://crmen.surge.sh/',
      imageSrc: '/FirstProject.png',
      imageAlt: 'CRM Project',
      title: 'CRM',
      description: 'Built a comprehensive CRM UI with 50+ screens using React.js for an Italian client, incorporating Gantt charts and React schedules for efficient project management. The app includes features like task assignment to multiple users, detailed Gantt chart reports, and enhanced collaboration tools.',
      email: 'admin@gmail.com',
      password: '11223344',
    },
    {
      linkTo: 'https://www.niwali.com/',
      imageSrc: '/ThirdProject.png',
      imageAlt: 'VergeSystems',
      title: 'Niwali',
      description: 'A robust E-commerce site built with React.js, seamlessly integrated with Stripe for secure and efficient payment processing, providing a smooth and reliable shopping experience.',
    },
  

    {
      linkTo: 'https://super-mart.surge.sh',
      imageSrc: '/FouProject.png',
      imageAlt: 'Supermarcado',
      title: 'Supermarcado',
      description: 'Designed a modern, responsive UI for an e-commerce store, focusing on seamless user experience and adaptive features for a wide range of devices, ensuring smooth navigation and an engaging shopping experience.',
    },
  ];

  return (
    <div className=" w-full " id='projects'>
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <section className="relative  min-h-screen flex flex-col justify-center ">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center w-full divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-5xl mx-auto">
              <div className="w-full   space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {projects.map((project, index) => (
                  <div key={index} className="relative  flex items-center justify-between  w-full md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border  bg-emerald-500 text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                        <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:scale-105 transition-all delay-150 backdrop-blur-2xl p-4 rounded bg-gray-900 shadow z-30">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <a href={project.linkTo} className="font-bold text-white">
                          {project.title}
                        </a>
                        <a href={project?.linkTo} className="text-xs font-medium  cursor-pointer text-indigo-500">Link</a>
                      </div>
                      <div className="text-white text-justify">{project.description}</div>
                      <div style={{ display: project?.email ? "" : "none" }}>
                        <div className="text-white text-justify">Email-- 
                          {project.email}</div>
                        <div className="text-white text-justify">Password:--
                          {project.password}</div>
                      </div>
                      <img src={project.imageSrc} alt={project.imageAlt} className="mt-4 w-full h-auto rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
