import styled, { css } from "styled-components";
import Icon from "../../images/logo.png";
import Image from "../../images/contract.png";
import Services from "../../images/services.jpg";
import About from "../../images/about.jpg";
import Contact from "../../images/contact.jpg";
import Questions from "../../images/questions.jpg";
import {
  DivAnimationLeft,
  DivAnimationRight,
} from "../../routes/HomePage/HomePage.styled";

export const Container = styled.main`
  width: 100vw;
  overflow-x: hidden;

  padding-bottom: 100px;
`;
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  ${(props) =>
    props.left &&
    css`
      justify-content: flex-start;
      animation: 1s linear 1s infinite alternate ${DivAnimationLeft};
    `};

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
      animation: 1s linear 1s infinite alternate ${DivAnimationRight};
    `};

  ${(props) =>
    props.question &&
    css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `};
`;

export const Logo = styled.div`
  background-image: url(${Icon});
  width: 40px;
  height: 40px;
  margin: 15px;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
`;
export const Hero = styled.div`
  background-image: url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 80vh;
  width: 100vw;
  ${(props) =>
    props.services &&
    css`
      background-image: url(${Services});
    `};
  ${(props) =>
    props.about &&
    css`
      background-image: url(${About});
    `};
  ${(props) =>
    props.contact &&
    css`
      background-image: url(${Contact});
    `};
  ${(props) =>
    props.faq &&
    css`
      background-image: url(${Questions});
    `};
`;

export const Slogan = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  align-items: center;
  top: 58vh;
  height: 10vh;
  background: black;
  opacity: 0.8;
  color: white;
  ${(props) =>
    props.services &&
    css`
      background: white;
      color: black;
    `};
  ${(props) =>
    props.about &&
    css`
      background: orangered;
      color: yellow;
    `};
  ${(props) =>
    props.contact &&
    css`
      background: darkblue;
      color: white;
    `};
  ${(props) =>
    props.faq &&
    css`
      background: white;
      color: black;
    `};
`;

export const Headings = styled.div`
  font-family: "Bad Script", cursive;
  position: relative;
  font-size: 30px;
  padding: 20px;
`;

export const Info = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  background: lightgreen;
  border-radius: 3px;
  width: 52%;
  border: 2px solid darkgreen;
  color: darkgreen;
  text-transform: uppercase;
  padding: 20px;
  margin: 20px;

  ${(props) =>
    props.contact &&
    css`
      background: darkblue;
      color: white;
      border: 2px solid lightblue;
    `};
`;
