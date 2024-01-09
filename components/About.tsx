import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Im a skilled web developer with expertise in building modern, responsive UIs with React, React Native,
          and CSS frameworks. I craft performant back-ends with Node.js and Express, utilize databases like
          Firebase and MongoDB, and leverage PWA and offline capabilities for enhanced user experiences.

          <br />
          <br />
          My
          proficiency in JavaScript, TypeScript, Git, and GitHub makes me a reliable team player ready to tackle
          any web development challenge.
        </p>
      </div>
    </section>
  );
};

export default About;
