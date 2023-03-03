import React from "react";

export function Icon({ logo, link }) {
  return (
    <a href={link}>
      <img src={logo} width="52px" ></img>
    </a>
  );
}
function SocialIcons(props) {
  return (
    <div className="flex row-auto justify-start gap-2 py-3">{props.children}</div>
  );
}

export default SocialIcons;
