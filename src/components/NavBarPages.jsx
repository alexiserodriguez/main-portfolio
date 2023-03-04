import React, { useState } from "react";
import { IoIosArrowBack, IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

export const NavItem = ({ children, to, ...props }) => {
  const activeClassname =
    "text-sm flex items-center lg:text-lg border-b-2 border-transparent text-blue text-white mb-[4px] lg:mb-none rounded-md md:rounded-none py-1 px-8 md:pt-3 md:px-0 bg-transparent font-heading underline decoration-green decoration-2 underline-offset-[5px] pointer-events-none dark:text-blue";

  const inactiveClassname =
    "text-sm flex items-center lg:text-lg border-b-2 border-transparent text-blue text-white mb-[4px] lg:mb-none rounded-md md:rounded-none py-1 px-8 md:pt-3 md:px-0 bg-transparent font-heading underline-none md:decoration-transparent hover:md:underline hover:md:decoration-green hover:md:decoration-2 hover:lg:underline-offset-[5px] hover:md:decoration-solid  transition duration-300 dark:text-blue";
  return (
    <li>
      <NavLink
        {...props}
        className={({ isActive }) =>
          isActive ? activeClassname : inactiveClassname
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export const NavMenu = (props) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <ul className="hidden lg:flex md:gap-6 md:rounded-full md:py-0 md:px-10 md:border-turq md:border-2 dark:md:border-lborder">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About me</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/contact">Contact me</NavItem>
      </ul>
      <div className="lg:hidden">
        <button
          className="p-2 text-4xl outline-none "
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <h1 className="text-4xl text-white dark:text-turq">
              <IoIosArrowBack />
            </h1>
          ) : (
            <h1 className="text-4xl text-white dark:text-turq">
              <IoIosMenu />
            </h1>
          )}
        </button>
      </div>
      <div className="lg:hidden">
        <div
          className={`flex-1 justify-self-center space-x-8 pb-2 pt-3 px-2 lg:px-10 md:px-5  lg:border-2 lg:border-solid lg:border-turq rounded-lg ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About me</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/contact">Contact me</NavItem>
          </ul>
        </div>
      </div>
    </>
  );
};

function NavBar() {
  return (
    <div className="pt-[20px] md:pt-[60px]">
      <div className="mx-auto">
        <div className="flex justify-between">
          <div className="flex  lg:space-x-[445px]">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
