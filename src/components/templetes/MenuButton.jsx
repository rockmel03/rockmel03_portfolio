import React from 'react'

const MenuButton = ({ isActive, clickHandler }) => {
    return (
      <button onClick={clickHandler} className="w-7 relative">
        <span
          className={`block w-full h-[0.18rem] rounded  bg-dark dark:bg-light transition-all duration-100  ${
            isActive
              ? "rotate-45 absolute top-1/2 -translate-y-1/2"
              : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`block w-full h-[0.18rem] rounded bg-dark dark:bg-light transition-all duration-100 ${
            isActive ? "opacity-0" : " opacity-1"
          }`}
        ></span>
        <span
          className={`block w-full h-[0.18rem] rounded  bg-dark dark:bg-light transition-all duration-100 ${
            isActive
              ? "-rotate-45 absolute top-1/2 -translate-y-1/2"
              : "translate-y-1"
          }`}
        ></span>
      </button>
    );
  };

export default MenuButton
