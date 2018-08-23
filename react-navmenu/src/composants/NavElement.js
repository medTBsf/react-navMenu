import React from "react";
import "./NavElement.css";

const NavElt = props => {
  return (
    <a
      href={props.element.link}
      style={
        { color: props.element.link === document.URL ? "red" : "black" }
        // we can use style={{ color: props.element.isActive ? "red" : "black" } but I prefer the method above
      }
    >
      {props.element.title}
    </a>
  );
};

export default NavElt;
