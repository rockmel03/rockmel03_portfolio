import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout className="!py-0 ">
      <footer className="flex items-center justify-between flex-col-reverse gap-2  sm:flex-row py-5 sm:py-10">
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-sm sm:text-md "
        >
          {new Date().getFullYear()} &copy; All Right Reserved
        </a>
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-base sm:text-md "
        >
          Made with <span className="text-[1.2em] text-red-400">&#10084;</span>{" "}
          by Rockmel03
        </a>
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-base sm:text-md underline"
        >
          {" "}
          Say Hello
        </a>
      </footer>
    </Layout>
  );
};

export default Footer;
