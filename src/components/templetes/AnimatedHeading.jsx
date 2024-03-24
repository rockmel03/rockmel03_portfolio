import { motion, stagger } from "framer-motion";
import React from "react";

const AnimatedHeading = ({ data, className }) => {
  console.log(stagger(0.1, { startDelay: 0.15 }));
  return (
    <h1 className={`text-8xl text-center font-black capitalize ${className}`}>
      {data.split(" ").map((item, idx) => (
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5 + idx * 0.2,
          }}
          key={idx}
          className="inline-block"
        >
          {item}&nbsp;
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
