import React, { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeButton from "./templetes/ThemeButton";
import MenuButton from "./templetes/MenuButton";
import SideNav from "./templetes/SideNav";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";


const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navLinks = [
    { name: "home", link: "/" },
    { name: "projects", link: "/projects" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  const menuClickHandler = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header>
      <Layout className="!py-0">
        {isNavActive && <SideNav navLinks={navLinks} />}
        <nav className="w-full h-[12vh] p-3 flex justify-between items-center border-b-[1px] flex-row-reverse md:flex-row">
          <div className="w-fit md:hidden">
            <MenuButton
              clickHandler={menuClickHandler}
              isActive={isNavActive}
            />
          </div>
          <ul className="hidden md:flex items-center justify-center gap-4 ">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="text-xl font-semibold capitalize hover:opacity-90 relative after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-dark dark:after:bg-light after:duration-300 hover:after:w-full"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <h1 className="leading-none font-semibold text-center text-light bg-dark dark:text-dark dark:bg-light  rounded-full flex items-center justify-center md:absolute left-1/2 md:-translate-x-1/2  cursor-default text-lg md:text-2xl w-12 h-12 md:h-14 md:w-14">
            KM
          </h1>

          <div className="hidden md:flex items-center justify-center gap-8">
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link to="/" className="text-3xl">
                <GithubIcon className="w-8 h-auto dark:bg-light rounded-full" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link to="/" className="text-3xl">
                <TwitterIcon className="w-8 h-auto" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link to="/" className="text-3xl">
                <LinkedinIcon className="w-8 h-auto" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Link to="/" className="text-3xl">
                <InstagramIcon className="w-8 h-auto" />
              </Link>
            </motion.div>
            <ThemeButton />
          </div>
        </nav>
      </Layout>
    </header>
  );
};

export default Header;
