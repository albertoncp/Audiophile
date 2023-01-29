import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="leftContainer">
        <div>
          <GiHamburgerMenu size={23} height={2} color="white" />
        </div>
        <div>
          <img src="images\shared\logo.svg"></img>
        </div>
      </div>
      <div className="RightContainer">
        <img src="images\shared\icon-cart.svg" ></img>
      </div>
    </div>
  );
};

export default Navbar;
