import React from "react";

const ShadowCard = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`relative rounded-3xl rounded-br-2xl text-dark dark:text-light bg-light dark:bg-dark  border border-solid border-dark dark:border-light shadow-md shadow-dark dark:shadow-light ${className}`}
    >
      <div className="absolute -z-10 -right-3 top-3 w-full h-full  bg-dark dark:bg-light rounded-3xl " />
      {children}
    </div>
  );
};

export default ShadowCard;
