import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [mode, setMode] = useState(window.localStorage.getItem("theme")||"dark");

//   const check = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
    if (mode == "dark") document.documentElement.classList.add("dark");
    if (mode == "light") document.documentElement.classList.remove("dark");
  }, [mode]);

  return [mode, setMode];
};

export default useTheme;
