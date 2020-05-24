import React from "react";
import { NavLink } from "react-router-dom";
import { StyledMenu, StyledBurger } from "./NavBar.styled";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/services" onClick={() => setOpen(!open)}>
        Services
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(!open)}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </NavLink>
    </StyledMenu>
  );
};
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default NavBar;
