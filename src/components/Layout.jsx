import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto py-16 px-2 sm:py-5 relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
