import React from "react";
import NavElt from "./NavElement";
import "./NavElement.css";

const NavMenu = props => {
  return (
    <div>
      <div className="nav-menu">
        {props.listMenu.map((e, index) => {
          return <NavElt element={e} key={index} />;
        })}
        <div className="sub-menu">
          {props.children.map((e, i) => {
            if (document.URL === "http://localhost:3000/services")
              return <NavElt element={e} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
