import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu, StyledBurger } from "./NavBar.styled";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Bad Script", cursive;
  font-size: 30px;
  color: darkgreen;
  &:focus {
    color: white;
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/" onClick={() => setOpen(!open)}>
        Home
      </StyledLink>
      <StyledLink to="/services" onClick={() => setOpen(!open)}>
        Services
      </StyledLink>
      <StyledLink to="/about" onClick={() => setOpen(!open)}>
        About
      </StyledLink>
      <StyledLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </StyledLink>
      <StyledLink to="/faq" onClick={() => setOpen(!open)}>
        FAQ
      </StyledLink>
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
