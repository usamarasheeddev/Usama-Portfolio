"use client";

import React from "react";
import Image from "next/image";
import TypeWriterComponent from "./TypeWriterComponent";
import Link from "next/link";
import { Social_Icons } from "@/constant";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image src="/Me.png" height={300} width={300} alt="Usama Rasheed" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1    hover:scale-110 transition ease-in-out   hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Usama Rasheed!
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          ☕️
        </p>
        <div className="text-white text-4xl hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter cursor-pointer">

          <TypeWriterComponent />
        </div>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Software Engineer with a focus on MERN Stack development,
          dedicated to crafting elegant and user-friendly Web Apps.
        </p>
        <div className="text-md flex justify-center gap-3">
          {/* <button
            onClick={() => window.open("mailto:usamarasheed2188@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button> */}
          <button
            onClick={() => window.open("tel:+923091524895")}  // Replace +123456789 with the desired phone number
            className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </div>
        <div className="text-md flex justify-center gap-3 mt-5">

          {Social_Icons.map((social) => {
            return (
              <Link
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                key={social.alt}
                className="z-[1]"
              >
                <Image
                  src={social.image}
                  height={30}
                  width={30}
                  className="mx-5 "
                  alt={social.alt}
                />
              </Link>
            );
          })}
        </div>



      </div>
    </div>
  );
};

export default Banner;
