import React from 'react'
import { MoonIcon, SunIcon } from '../Icons';
import useTheme from '../../hooks/useTheme';

const ThemeButton = ({ className }) => {
    const [mode, setMode] = useTheme();
    return (
      <button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        className={`p-1 rounded-full bg-dark text-light dark:bg-light dark:text-dark ${className}`}
      >
        {mode == "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    );
  };

export default ThemeButton
