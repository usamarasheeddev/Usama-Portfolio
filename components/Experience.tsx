import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">

        <div className="bg-gray-800 p-10 rounded-md">

          <div className="flex  md:flex-row  flex-col text-center  justify-center md:justify-between pt-5">
            <p className="text-gray-300 ">
              <span className="font-semibold">MERN Stack Developer /</span> Software Engineer
            </p>
            <p className="text-gray-300">Dec 2024 - PRESENT</p>
          </div>
          <p className="text-gray-300 pt-5 text-justify">
            As a Full Stack Developer with deep expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in building responsive, scalable web applications with modern front-end and robust back-end architectures. I design and deploy microservice-based systems using AWS (EC2, S3, RDS, Lambda, ECS) and leverage Docker for containerization and orchestration.
             I automate development workflows through CI/CD pipelines using GitHub Actions. My work emphasizes clean API design, third-party integrations.
             With strong skills in Git-based collaboration, DevOps, and cloud-native practices, I bridge the gap between development and deployment to deliver reliable, maintainable software systems from concept to production.

          </p>
        </div>
        
        <div className="bg-gray-800 p-10 rounded-md mt-6">

          <div className="flex  md:flex-row  flex-col text-center  justify-center md:justify-between pt-5">
            <p className="text-gray-300 ">
              <span className="font-semibold">MERN Stack Developer </span>
            </p>
            <p className="text-gray-300">AUG 2022 - Nov 2024</p>
          </div>
          <p className="text-gray-300 pt-5 text-justify">
            Im a skilled web developer with expertise in building modern, responsive UIs with React, React Native,
            and CSS frameworks. I craft performant back-ends with Node.js and Express, utilize databases like
            Firebase and MongoDB, and leverage PWA and offline capabilities for enhanced user experiences. My
            proficiency in JavaScript, TypeScript, React Js, Node Js, Git, and GitHub makes me a reliable team player ready to tackle
            any web development challenge.

          </p>
        </div>


        <div className="flex-col justify-center items-center flex sm:flex-row flex-wrap">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next Js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React Native
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            TypeScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Node Js
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Express Js
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Mongo Db
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            My Sql
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Postgresql
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PWA(Progressing Web App)
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Tailwind Css / MUI
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
