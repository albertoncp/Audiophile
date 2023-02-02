import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { useStateContext } from "../../lib/context";
import Nav from "../Nav/Nav";

const Navbar = () => {

  const { setShowNav, showNav} = useStateContext();

  return (
    <div className="NavbarBlock" >
      <div className="NavbarContainer">
      <div className="leftContainer">
        <div className="hambMnenu"  onClick={() => setShowNav(!showNav)}  >
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
      {showNav && <Nav/>}
    </div>
  );
};

export default Navbar;
