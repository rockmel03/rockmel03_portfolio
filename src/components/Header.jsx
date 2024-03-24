import React from "react";
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

const Header = () => {
  const [mode, setMode] = useTheme();

  return (
    <header>
      <Layout className="!py-0">
        <nav className="w-full h-[12vh] p-3 flex justify-between items-center shadow-[0_1px]">
          <ul className="flex items-center justify-center gap-4">
            {["home", "projects", "about", "articles"].map((item, idx) => (
              <li
                key={idx}
                className="text-xl font-semibold capitalize hover:opacity-90 relative after:w-0 after:h-[.1em] after:absolute after:left-0 after:bottom-0 after:bg-dark dark:after:bg-light after:duration-300 hover:after:w-full"
              >
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>

          <h1 className="leading-none font-semibold text-2xl text-center text-light bg-dark dark:text-dark dark:bg-light h-14 w-14 rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 cursor-default">
            KM
          </h1>

          <div className="flex items-center justify-center gap-8">
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
