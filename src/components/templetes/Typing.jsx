import React, { useEffect, useState } from "react";

const Typing = ({ data = ["Developer", "Designer", "Editor"] }) => {
  const [heading, setHeading] = useState("");

  // const startType = () => {};

  useEffect(() => {
    let clutter = "";
    let wordIndex = 0;
    let letterIndex = 0;

    const timer = setInterval(() => {
      let arr = data[wordIndex].split(""); //[d,e,v,l,o,p,e,r]
      if (letterIndex < arr.length) {
        clutter += arr[letterIndex];
        letterIndex++;
      } else {
        wordIndex < data.length - 1 ? wordIndex++ : (wordIndex = 0);

        letterIndex = 0;
        clutter = "";
      }
      setHeading(clutter);
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <span className="relative inline-block pr-1 after:w-[.1em] after:h-full after:absolute after:left-full after:bg-zinc-500 after:opacity-0 after:animate-[pulse_.5s_infinite_linear]">
      {heading}
    </span>
  );
};

export default Typing;
