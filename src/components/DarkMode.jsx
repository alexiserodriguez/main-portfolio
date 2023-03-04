import React, { useEffect, useState } from "react";
import { MdModeNight, MdLightMode } from "react-icons/md";

const Nav = () => {
  const [theme, setTheme] = useState(null);

  // Setting device preffered color scheme
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const DarkTheme = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  return (
    <div className="border-green bg-blue dark:bg-transparent border-2 rounded-2xl p-3 dark:border-[#CDD4DC] duration-300">
      <div
        className="flex items-center text-2xl text-green dark:text-blue dark:duration-300 cursor-pointer"
        onClick={DarkTheme}
      >
        {theme === "dark" ? <MdModeNight /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default Nav;
