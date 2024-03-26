import React, { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useTheme from "../hooks/useTheme";
import { motion } from "framer-motion";

const MenuButton = ({ isActive, clickHandler }) => {
  return (
    <button onClick={clickHandler} className="w-7 relative">
      <span
        className={`block w-full h-[0.18rem] rounded  bg-dark dark:bg-light transition-all duration-100  ${
          isActive
            ? "rotate-45 absolute top-1/2 -translate-y-1/2"
            : "-translate-y-1"
        }`}
      ></span>
      <span
        className={`block w-full h-[0.18rem] rounded bg-dark dark:bg-light transition-all duration-100 ${
          isActive ? "opacity-0" : " opacity-1"
        }`}
      ></span>
      <span
        className={`block w-full h-[0.18rem] rounded  bg-dark dark:bg-light transition-all duration-100 ${
          isActive
            ? "-rotate-45 absolute top-1/2 -translate-y-1/2"
            : "translate-y-1"
        }`}
      ></span>
    </button>
  );
};

const Header = () => {
  const [mode, setMode] = useTheme();
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
        <nav className="w-full h-[12vh] p-3 flex justify-between items-center border-b-[1px] flex-row-reverse md:flex-row">
          <div className="w-fit md:hidden">
            <MenuButton
              clickHandler={menuClickHandler}
              isActive={isNavActive}
            />
          </div>
          {isNavActive && (
            <div className=" flex flex-col justify-between fixed z-50 left-0 top-0 h-screen p-5 py-[10vh] bg-light/80 dark:bg-dark/50  w-[300px] backdrop-filter backdrop-blur-md md:hidden">
              <ul className="my-3 flex flex-col items-start justify-center gap-2 border-b py-2">
                {navLinks.map((item, idx) => (
                  <li key={idx} className="w-full rounded-md capitalize">
                    <Link
                      to={item.link}
                      className=" inline-block w-full px-4 py-3 font-medium"
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
                {/* <Link to="/" className="text-3xl">
              <PinterestIcon className="w-8 h-auto" />
            </Link> */}
                <Link to="/" className="text-3xl">
                  <InstagramIcon className="w-8 h-auto" />
                </Link>

                <button
                  onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                  className="w-8 h-auto p-1 rounded-full bg-dark text-light dark:bg-light dark:text-dark"
                >
                  {mode == "dark" ? <MoonIcon /> : <SunIcon />}
                </button>
              </div>
            </div>
          )}

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
            <Link to="/" className="text-3xl">
              <GithubIcon className="w-8 h-auto dark:bg-light rounded-full" />
            </Link>
            <Link to="/" className="text-3xl">
              <TwitterIcon className="w-8 h-auto" />
            </Link>
            <Link to="/" className="text-3xl">
              <LinkedinIcon className="w-8 h-auto" />
            </Link>
            {/* <Link to="/" className="text-3xl">
              <PinterestIcon className="w-8 h-auto" />
            </Link> */}
            <Link to="/" className="text-3xl">
              <InstagramIcon className="w-8 h-auto" />
            </Link>

            <button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              className="p-1 rounded-full bg-dark text-light dark:bg-light dark:text-dark"
            >
              {mode == "dark" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>
      </Layout>
    </header>
  );
};

export default Header;
