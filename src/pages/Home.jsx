import React from "react";
import Layout from "../components/Layout";
import Typing from "../components/templetes/Typing";
import AnimatedHeading from "../components/templetes/AnimatedHeading";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Layout className="!py-0">
        <main className="relative w-full h-[calc(100vh-12vh)] flex  border-b-[1px] border-b-zinc-700">
          <div className="flex-1 flex flex-col justify-center items-start">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "fit-content" }}
              transition={{ duration: 0.5 }}
              className="w-fit overflow-hidden"
            >
              <h3 className="text-3xl font-bold leading-tight  whitespace-nowrap">
                Hey, It's <span>me!</span>
              </h3>
            </motion.div>
            <AnimatedHeading
              data="kamal melkani"
              className={`!text-[5.3rem] whitespace-nowrap leading-tight overflow-hidden`}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-fit overflow-hidden"
            >
              <h2 className="text-5xl font-bold leading-tight">
                I am a&nbsp;
                <span className=" capitalize text-yellow-dark   ">
                  <Typing data={["frontend developer", "web designer"]} />
                </span>
              </h2>
            </motion.div>
            <p className="text-lg font-medium my-4">
              Passionate frontend developer crafting immersive digital
              experiences with HTML, CSS, JavaScript, and React.js. Expertise in
              bringing creativity and precision to every project. Let's build
              something incredible together.
            </p>
            <div className="buttons flex items-center gap-5">
              <button className=" text-xl font-bold bg-black  border-black text-zinc-50 dark:bg-white dark:border-white dark:text-black border-[2px] rounded-lg px-5 py-2 outline-none flex gap-3 items-center justify-center active:scale-90 duration-200">
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1m3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"
                  />
                </svg>
              </button>
              <a
                href="/"
                className=" text-lg font-semibold relative  after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-black dark:after:bg-white after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center   ">
            <div className="w-full h-full overflow-hidden ">
              <img
                src="/dpAi.png"
                alt=""
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
