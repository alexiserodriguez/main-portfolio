import React from "react";

function Par(props) {
  return (
    <p className="xs:text-md sm:text-lg md:text-2xl font-par text-white leading-tight">
      {props.children}
    </p>
  );
}
export default Par;
