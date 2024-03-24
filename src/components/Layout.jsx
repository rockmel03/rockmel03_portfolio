import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-screen-xl mx-auto py-16 px-2 relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
