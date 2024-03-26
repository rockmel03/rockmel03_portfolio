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
      className="w-fit font-semibold p-5 bg-dark text-light dark:bg-light dark:text-dark rounded-full absolute cursor-pointer"
    >
      {title}
    </motion.h5>
  );
};

const About = () => {
  return (
    <main>
      <Layout className="py-10">
        <AnimatedHeading data={"Passion Fuels Purpose!"} className="mb-20" />
        <div className=" flex gap-10 items-start justify-between">
          <div className="w-[40%]">
            <h2 className="text-2xl font-semibold">Biography</h2>
            <p className=" my-3 text-lg font-medium">
              Hi i'm Kamal Melkani,a frontend developer , I'm passionate about
              crafting intuitive user interfaces and seamless experiences. With
              expertise in HTML, CSS, and JavaScript, I create visually
              appealing and responsive websites. Constantly learning and
              adapting to new technologies, I collaborate effectively to deliver
              high-quality solutions that exceed client expectations.
            </p>
            <p className=" my-3 text-lg font-medium">
              I have a strong foundation in HTML, CSS, and JavaScript, and I am
              constantly expanding my skills by learning new frameworks and
              technologies.
            </p>
            <p className=" my-3 text-lg font-medium">
              My goal is to leverage my skills and passion for frontend
              development to create impactful digital experiences and
              continuously evolve as a professional in this dynamic industry.
            </p>
          </div>
          <ShadowCard className={` w-[30%] aspect-[3/4] p-10`}>
            <div className="w-full h-full rounded-xl bg-yellow-500 overflow-hidden">
              <img
                src="./dpAi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </ShadowCard>
          <div className="w-[20%] h-full flex flex-col gap-16 items-end justify-between">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-6xl font-black">40+</h1>
              <h3 className="text-xl font-semibold opacity-80">
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>

        <div className=" w-full h-screen mt-20 rounded-full flex items-center justify-center relative bg-radial-light dark:bg-radial-dark">
          <h3 className="w-fit p-5 bg-dark text-xl font-semibold text-light  dark:bg-light dark:text-dark rounded-full capitalize  hover:scale-95">
            skills
          </h3>
          <SkillElement title="HTML" x="-13vw" y=" -30vh" />
          <SkillElement title="CSS" x="5vw" y=" -33vh" />
          <SkillElement title="Javascript" x="22vw" y=" -22vh" />
          <SkillElement title="GSAP" x="26vw" y=" 6vh" />
          <SkillElement title="ScrollTrigger" x="13vw" y=" 27vh" />
          <SkillElement title="React.js" x="-22vw" y=" 2vh" />
          <SkillElement title="Tailwind" x="-13vw" y=" 25vh" />
        </div>
      </Layout>
    </main>
  );
};

export default About;
