import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer>
      <Layout className="!py-10 flex items-center justify-between">
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-md "
        >
          {new Date().getFullYear()} &copy; All Right Reserved
        </a>
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-md "
        >
          Made with <span className="text-[1.2em] text-red-400">&#10084;</span>{" "}
          by Rockmel03
        </a>
        <a
          href="mailto:kamalmelkani03@gmail.com"
          className="font-semibold text-md underline"
        >
          {" "}
          Say Hello
        </a>
      </Layout>
    </footer>
  );
};

export default Footer;
