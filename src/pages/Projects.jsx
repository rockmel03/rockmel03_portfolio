import React from "react";
import Layout from "../components/Layout";
import AnimatedHeading from "../components/templetes/AnimatedHeading";
import { GithubIcon } from "../components/Icons";
import ShadowCard from "../components/templetes/ShadowCard";

const FeatureProject = ({
  title = "",
  description = "",
  img,
  link,
  github,
}) => {
  return (
    <ShadowCard
      className={`p-10 w-full flex items-center justify-between gap-10 `}
    >
      <a
        href={link}
        target="_blank"
        className="w-1/2 aspect-video overflow-hidden rounded-xl bg-zinc-300"
      >
        <img src={img} alt="" className="w-full h-full object-cover " />
      </a>

      <div className="w-1/2">
        <h2 className="text-xl font-medium">Featured Project</h2>
        <h1 className="text-3xl font-semibold mt-2 uppercase hover:underline cursor-default">
          {title}
        </h1>
        <p className="text-base my-3 ">{description}</p>
        <div className="flex items-center gap-3">
          <a href={github} target="_blank">
            <GithubIcon className="w-10 h-auto dark:bg-light rounded-full border" />
          </a>
          <a
            href={link}
            target="_blank"
            className="px-4 py-2 rounded-md text-sm font-semibold capitalize text-light bg-dark dark:text-dark dark:bg-light"
          >
            visit Project
          </a>
        </div>
      </div>
    </ShadowCard>
  );
};
const Project = ({ title = "", description = "", img, link, github }) => {
  return (
    <ShadowCard className={`p-10 w-full flex flex-col gap-10 `}>
      <a
        href={link}
        target="_blank"
        className="w-full aspect-[4/2] overflow-hidden rounded-xl bg-zinc-300"
      >
        <img src={img} alt="" className="w-full h-full object-cover " />
      </a>

      <div className="w-full">
        <h2 className="text-sm font-medium">Featured Project</h2>
        <h1 className="text-2xl font-semibold mt-2 uppercase hover:underline cursor-default">
          {title}
        </h1>
        <p className="text-base my-3 ">{description}</p>
        <div className="flex flex-row-reverse items-center justify-between gap-3">
          <a href={github} target="_blank">
            <GithubIcon className="w-10 h-auto dark:bg-light rounded-full border" />
          </a>
          <a
            href={link}
            target="_blank"
            className="px-4 py-2 rounded-md text-sm font-semibold capitalize text-light bg-dark dark:text-dark dark:bg-light"
          >
            visit Project
          </a>
        </div>
      </div>
    </ShadowCard>
  );
};

const Projects = () => {
  return (
    <main>
      <Layout>
        <AnimatedHeading
          data="Imagination Ignites Innovation!"
          className=" mb-16"
        />
        <div className=" grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeatureProject
              title={`Crypto Screener Application`}
              description={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.`}
              img={``}
              link={`/`}
              github={`/`}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="React Portfolio Website"
              img={""}
              github={`/`}
              link={`/`}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="React Portfolio Website"
              img={""}
              github={`/`}
              link={`/`}
            />
          </div>
          <div className="col-span-12">
            <FeatureProject
              title={`Crypto Screener Application`}
              description={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.`}
              img={``}
              link={`/`}
              github={`/`}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="React Portfolio Website"
              img={""}
              github={`/`}
              link={`/`}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="React Portfolio Website"
              img={""}
              github={`/`}
              link={`/`}
            />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
