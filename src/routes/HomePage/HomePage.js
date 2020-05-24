import React from "react";

import styled, { css } from "styled-components";
import { Pentagon, Diamond } from "../../components/Dividers/Dividers";
import Image from "../../images/contract.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const DivWrapper = styled.div`
  display: flex;
  padding: 30px;
`;

const Hero = styled.div`
  background-image: url("${Image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
 
  height: 50vh;
  width: 100vw;

`;

const Slogan = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  align-items: center;
  top: 38vh;
  height: 10vh;
  background: black;
  opacity: 0.8;
  color: white;
`;

const Mission = styled.div`
  padding: 10px;
`;

const Icons = styled.div`
  background: white;
  border-radius: 50%;

  width: 10%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;
  margin: 10px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default function HomePage() {
  return (
    <Container>
      <Hero>
        <Slogan>
          I protect you from the "what ifs," so you can focus on your craft.
        </Slogan>
      </Hero>

      <DivWrapper>
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
      </DivWrapper>
      <Mission>
        My philosophy....Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Malesuada fames ac turpis egestas. Quis eleifend quam adipiscing vitae
        proin sagittis nisl rhoncus. Interdum consectetur libero id faucibus
        nisl tincidunt eget. Quisque sagittis purus sit amet volutpat. Egestas
        congue quisque egestas diam in. Vestibulum lectus mauris ultrices eros
        in cursus turpis massa tincidunt. Sollicitudin aliquam ultrices sagittis
        orci. Eu sem integer vitae justo eget magna fermentum iaculis eu. Magna
        fermentum iaculis eu non diam phasellus vestibulum lorem sed. Tellus
        pellentesque eu tincidunt tortor. Sed elementum tempus egestas sed sed
        risus pretium quam. Sed odio morbi quis commodo. Feugiat scelerisque
        varius morbi enim nunc faucibus a. Ipsum a arcu cursus vitae congue
        mauris rhoncus aenean vel. Egestas dui.
      </Mission>
    </Container>
  );
}
