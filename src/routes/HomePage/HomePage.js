import React from "react";

import styled, { css } from "styled-components";
import {
  Diamond,
  TriangleTopRight,
  TriangleBottomLeft,
  TriangleDown,
  TriangleUp,
} from "../../components/Dividers/Dividers";
import Image from "../../images/contract.png";

const Container = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;

  ${(props) =>
    props.left &&
    css`
      justify-content: flex-start;
    `};

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `};

  ${(props) =>
    props.question &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `};
`;

const Hero = styled.div`
  background-image: url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 80vh;
  width: 100vw;
`;

const Slogan = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  align-items: center;
  top: 58vh;
  height: 10vh;
  background: black;
  opacity: 0.8;
  color: white;
`;

const Headings = styled.div`
  font-size: 30px;
  padding: 20px;
  font-family: "Bad Script", cursive;
`;

const Info = styled.div`
  padding: 10px;
`;

const Note = styled.p`
  color: red;
`;

const Icons = styled.div`
  background: grey;
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
const Question = styled.div``;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightgreen;
  color: darkgreen;
  text-transform: uppercase;
  padding: 24px;
  margin: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
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
        <Headings>My Philosophy</Headings>
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
      </DivWrapper>
      <Info>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
        turpis egestas. Quis eleifend quam adipiscing vitae proin sagittis nisl
        rhoncus. Interdum consectetur libero id faucibus nisl tincidunt eget.
        Quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas
        diam in. Vestibulum lectus mauris ultrices eros in cursus turpis massa
        tincidunt.
        <br />
        <br />
        Sollicitudin aliquam ultrices sagittis orci. Eu sem integer vitae justo
        eget magna fermentum iaculis eu. Magna fermentum iaculis eu non diam
        phasellus vestibulum lorem sed. Tellus pellentesque eu tincidunt tortor.
        Sed elementum tempus egestas sed sed risus pretium quam. Sed odio morbi
        quis commodo. Feugiat scelerisque varius morbi enim nunc faucibus a.
        Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Egestas dui.
      </Info>
      <DivWrapper>
        <TriangleBottomLeft />
        <TriangleBottomLeft />
        <Headings>What if?</Headings>
        <TriangleTopRight />
        <TriangleTopRight />
      </DivWrapper>
      <Note>
        Option 1: introduce scenarios/concerns that your clients may encounter.
        Allows you to target your ideal client by offering specific questions.
      </Note>
      <Info>
        A good contract should provide you with a sense of safety.....
        <DivWrapper question>
          <Question>What if I'm sued?</Question>
          <Question>What if my client refuses to pay?</Question>
          <Question>What if my client modifies my photographs?</Question>
          <Question>What if someone else takes credit for my work?</Question>
          <br />
          <br />
        </DivWrapper>
        I offer services for freelancers and creatives.{" "}
        <a href="/services">See what I offer</a>.
      </Info>
      <DivWrapper>
        <TriangleBottomLeft />
        <TriangleBottomLeft />
        <Headings>How I Can Help</Headings>
        <TriangleTopRight />
        <TriangleTopRight />
      </DivWrapper>
      <Note>
        Option 2: Display icons with general service description or brief
        explanation of what you offer.
      </Note>
      <DivWrapper>
        <Icons>Family Mediation</Icons>
        <Icons>Freelance Contracts</Icons>
        <Icons>Contract Review</Icons>
      </DivWrapper>
      I offer services for freelancers and creatives.{" "}
      <a href="/services">See what I offer</a>.
      <Button>Schedule your free consultation now!</Button>
      <Note>
        Create a free{" "}
        <a target="_blank" href="https://calendly.com/pages/pricing">
          calendly account
        </a>{" "}
        to indicate when you are available to book appointments.
      </Note>
      <DivWrapper left>
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
      </DivWrapper>
      <Headings>Questions?</Headings>
      <DivWrapper right>
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
      </DivWrapper>
      <Info>
        Here are some commonly asked <a href="/FAQ">questions</a>.
      </Info>
      <div>
        Contact me if you didn't find what you were looking for.
        <Note>Wendy to figure out how to add serverless contact form.</Note>
      </div>
    </Container>
  );
}
