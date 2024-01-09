import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex   mt-7 ">
          <Link
            href="https://crmen.surge.sh/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 items-center">
              <Image
                src="/FirstProject.png"
                height={120}
                width={170}
                alt="CRM Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CRM</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                   with  using React Js.
                </p>
                <p className="text-white text-[10px]">Email:admin@gmail.com</p>
                <p className="text-white text-[10px]">Password:11223344</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://pospwa5.surge.sh/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 items-center">
              <Image
                src="/SecondProject.png"
                height={120}
                width={170}
                alt="POS"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">POS</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on React Js, Works offline that use PWA technology

                </p>
                <p className="text-white text-[10px]">Email:admin@gmail.com</p>
                <p className="text-white text-[10px]">Password:12345</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.niwali.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 items-center">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={170}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Niwali
                </p>
                <p className="text-gray-500 text-[10px]">
                  Niwali website using React.js,Also inclue stripe payment gateway.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://super-mart.surge.sh"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 items-center">
              <Image
                src="/FouProject.png"
                height={150}
                width={170}
                alt="Supermarcado"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Supermarcado</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a ecommerce store.
                  {/* Designed the modern UI for a banking website utilizing Gatsby. */}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
