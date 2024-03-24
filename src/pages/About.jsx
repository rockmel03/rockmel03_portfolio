import React from "react";
import Layout from "../components/Layout";
import AnimatedHeading from "../components/templetes/AnimatedHeading";

const About = () => {
  return (
    <main>
      <Layout className="py-10">
        <AnimatedHeading data={"Passion Fuels Purpose!"} className="mb-20" />
        <div className=" flex gap-10 items-start justify-between">
          <div className="w-[40%]">
            <h2 className="text-2xl font-semibold">Biography</h2>
            <p className=" my-3 text-lg font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className=" my-3 text-lg font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className=" my-3 text-lg font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="relative z-10 w-[25%] aspect-[3/4] rounded-[20px] border border-1 border-dark dark:border-light">
            <div className="w-full h-full rounded-[20px] bg-yellow-500 overflow-hidden">
              <img
                src="./dpAi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[100%] h-[100%] absolute -z-10 left-3 top-3 rounded-[30px] bg-dark dark:bg-light" />
          </div>
          <div className="w-[20%] h-full flex flex-col gap-16 items-end justify-between">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-6xl font-black">40+</h1>
              <h3 className="text-xl font-semibold opacity-80">
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
