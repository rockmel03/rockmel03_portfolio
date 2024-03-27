import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import ThemeButton from "./ThemeButton";
import { motion } from "framer-motion";

const SideNav = ({ navLinks }) => {
  return (
    <motion.aside
      initial={{ scale: 0, transform: "translate(-50%,-50%)" }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed z-50 top-1/2 left-1/2 rounded-xl w-[80%] h-fit flex flex-col justify-between  p-5 py-[10vh] bg-light/90 dark:bg-dark/90   backdrop-filter backdrop-blur-md md:hidden"
    >
      <ul className="my-3 flex flex-col items-center justify-center gap-2 border-b py-2">
        {navLinks.map((item, idx) => (
          <li key={idx} className=" rounded-md capitalize">
            <Link
              to={item.link}
              className=" inline-block px-4 py-3 font-medium rounded-md text-center"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-start justify-center gap-4">
        <Link to="/" className="text-3xl">
          <GithubIcon className="w-8 h-auto dark:bg-light rounded-full" />
        </Link>
        <Link to="/" className="text-3xl">
          <TwitterIcon className="w-8 h-auto" />
        </Link>
        <Link to="/" className="text-3xl">
          <LinkedinIcon className="w-8 h-auto" />
        </Link>
        <Link to="/" className="text-3xl">
          <InstagramIcon className="w-8 h-auto" />
        </Link>
        <ThemeButton className={"w-8 h-auto "} />
      </div>
    </motion.aside>
  );
};

export default SideNav;
