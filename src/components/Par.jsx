import React from "react";

function Par(props) {
  return (
    <p className="xs:text-md sm:text-lg md:text-2xl font-par text-white leading-tight dark:text-blue duration-300">
      {props.children}
    </p>
  );
}
export default Par;
