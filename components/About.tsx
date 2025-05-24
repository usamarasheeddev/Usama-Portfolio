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
        <p className="text-gray-300 text-center">
          I'm a passionate and results-driven web developer with a strong focus on building modern, responsive user interfaces using React, React Native, and advanced CSS frameworks. I architect high-performance back-end systems with Node.js and Express, and work seamlessly with databases like Firebase and MongoDB to ensure scalable and real-time applications.

          <br />
          <br />
          {/* I also integrate Progressive Web App (PWA) features and offline capabilities to enhance user experience across devices. With a solid foundation in JavaScript and TypeScript, and a collaborative mindset backed by Git and GitHub, I'm a dependable team player who thrives in dynamic environments and is always ready to tackle complex development challenges. */}
        </p>

      </div>
    </section>
  );
};

export default About;
