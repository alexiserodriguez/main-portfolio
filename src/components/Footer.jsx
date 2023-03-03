import React from "react";
import { NavLink } from "react-router-dom";

export const NavItem = ({ children, to, ...props }) => {
  const activeClassname="text-sm flex flex-row items-center lg:text-lg border-b-2 border-transparent text-white mb-[4px] lg:mb-none rounded-md md:rounded-none py-1 px-0 lg:px-3 md:pt-3 md:px-0 bg-transparent font-heading underline underline-offset-[5px] decoration-2 decoration-green pointer-events-none"
  const inactiveClassname="text-sm flex flex-row items-center lg:text-lg border-b-2 border-transparent text-white mb-[4px] lg:mb-none rounded-md md:rounded-none py-1 px-0 lg:px-3 md:pt-3 md:px-0 bg-transparent font-heading sm:underline-none sm:decoration-transparent hover sm:underline hover:sm:decoration-green hover:md:decoration-2 hover md:underline-offset-[5px] hover:md:decoration-solid  transition duration-300"

  return (
    <li>
      <NavLink
        {...props}
        className={({isActive})=> isActive ? activeClassname : inactiveClassname}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

function Footer() {
  return (
    <>
      {window.scrollTo(0, 0)}
      <div>
        <hr className="text-turq mt-48" />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between align-middle  p-8">
          <ul className="flex-row flex flex-wrap gap-2 justify-center lg:gap-0  lg:space-x-0 pb-2 pt-3 lg:px-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About me</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/contact">Contact me</NavItem>
          </ul>
          <div className="flex flex-col items-center lg:justify-center">
            <h1 className="font-par text-lg text-white">
              2023. Alexis Rodriguez
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
