"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center md:justify-between justify-center m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <p className="z-[1] bg-transparent  font-bold  text-lg cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5">

            Usama Rasheed.
          </p>
          {/* <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
        </a>

        <div className="hidden md:flex flex-row gap-5 ">
          <Link
            href={'https://drive.google.com/drive/folders/1c9cZ1ldba308xyLAdKq4Nw5rld8uzIiZ?usp=sharing'}
            rel="noopener noreferrer"
            target="_blank"
            // onClick={() => window.open("mailto:usamarasheed2188@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Download Cv
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
