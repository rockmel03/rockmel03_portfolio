import React from "react";
import Layout from "../components/Layout";
import AnimatedHeading from "../components/templetes/AnimatedHeading";
import { motion } from "framer-motion";
import ShadowCard from "../components/templetes/ShadowCard";

const SkillElement = ({ title, x, y }) => {
  return (
    <motion.h5
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-fit font-semibold px-3 py-2 sm:p-5  text-light dark:text-dark bg-dark dark:bg-light  rounded-full absolute cursor-pointer"
    >
      {title}
    </motion.h5>
  );
};

const About = () => {
  return (
    <main>
      <Layout className="!py-10">
        <AnimatedHeading
          data={"Passion Fuels Purpose!"}
          className="mb-10 md:mb-20"
        />
        <div className="grid grid-cols-8 gap-5 gap-y-10">
          <div className="col-span-8 sm:col-span-5 md:col-span-5 lg:col-span-4">
            <h2 className="text-xl md:text-xl lg:text-2xl font-semibold">
              Biography
            </h2>
            <p className=" my-3 text-sm xs:text-base md:text-base lg:text-lg font-medium ">
              Hi i'm Kamal Melkani,a frontend developer , I'm passionate about
              crafting intuitive user interfaces and seamless experiences. With
              expertise in HTML, CSS, and JavaScript, I create visually
              appealing and responsive websites. Constantly learning and
              adapting to new technologies, I collaborate effectively to deliver
              high-quality solutions that exceed client expectations.
            </p>
            <p className=" my-3  text-sm xs:text-base md:text-base lg:text-lg font-medium ">
              I have a strong foundation in HTML, CSS, and JavaScript, and I am
              constantly expanding my skills by learning new frameworks and
              technologies.
            </p>
            <p className=" my-3  text-sm xs:text-base md:text-base lg:text-lg font-medium ">
              My goal is to leverage my skills and passion for frontend
              development to create impactful digital experiences and
              continuously evolve as a professional in this dynamic industry.
            </p>
          </div>
          <ShadowCard
            // className={` max-w-[320px] aspect-[3/4] p-10 col-span-2 `}
            className={`aspect-[3/4]  col-span-6 col-start-2 row-start-1 sm:row-start-auto sm:col-span-3 md:col-span-3 lg:col-span-2 p-5 md:p-10 `}
          >
            <div className="w-full h-full rounded-xl bg-yellow-500 overflow-hidden">
              <img
                src="./dpAi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </ShadowCard>
          <div
            className=" flex lg:flex-col 
           lg:gap-16 items-center justify-between col-span-8 lg:col-span-2"
          >
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                40+
              </h1>
              <h3 className="text-sm sm:text-base lg:text-xl text-center font-semibold opacity-80">
                Satisfied Clients
              </h3>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                40+
              </h1>
              <h3 className="text-sm sm:text-base lg:text-xl text-center font-semibold opacity-80">
                Satisfied Clients
              </h3>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                40+
              </h1>
              <h3 className="text-sm sm:text-base lg:text-xl text-center font-semibold opacity-80">
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>

        <div className=" w-full h-[60vh] sm:h-screen mt-20 rounded-full flex items-center justify-center relative bg-radial-light dark:bg-radial-dark sm:bg-radial-light-sm sm:dark:bg-radial-dark-sm md:bg-radial-light-md md:dark:bg-radial-dark-md lg:bg-radial-light-lg lg:dark:bg-radial-dark-lg">
          <h3 className="w-fit px-4 py-2 sm:p-5 bg-dark text-xl font-semibold text-light  dark:bg-light dark:text-dark rounded-full capitalize  hover:scale-95">
            skills
          </h3>
          <SkillElement title="HTML" x="-22vw" y=" -20vh" />
          <SkillElement title="CSS" x="2vw" y=" -30vh" />
          <SkillElement title="Javascript" x="28vw" y=" -18vh" />
          <SkillElement title="GSAP" x="30vw" y=" 6vh" />
          <SkillElement title="ScrollTrigger" x="16vw" y=" 25vh" />
          <SkillElement title="git & github" x="-1vw" y="35vh" />
          <SkillElement title="Tailwind" x="-20vw" y=" 22vh" />
          <SkillElement title="React.js" x="-30vw" y=" 2vh" />
        </div>
      </Layout>
    </main>
  );
};

export default About;
