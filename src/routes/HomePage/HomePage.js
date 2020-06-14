import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Philosophy from "../../components/Philosophy/Philosophy";
import Consultation from "../../components/Consultation/Consultation";
import Questions from "../../components/Questions/Questions";
import {
  Container,
  Logo,
  Hero,
  Slogan,
  Headings,
  Button,
  DivWrapper,
  Info,
} from "../../components/PageFeatures/PageFeatures.styled";
import {
  TriangleTopRight,
  TriangleBottomLeft,
  TriangleRight,
} from "../../components/Dividers/Dividers.styled";

import Mediation from "../../images/mediation.jpg";
import Footer from "../../components/Footer/Footer";
const Note = styled.p`
  color: red;
`;

const Icons = styled.div`
  background-image: url(${Mediation});
  background-size: cover;
  border-radius: 50%;
  border: 1px solid grey;
  width: 10%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 10px;
`;
const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default class HomePage extends Component {
  state = {
    toggleOption: "",
  };
  render() {
    return (
      <>
        <Container>
          <Hero>
            <Logo />
            <Slogan>
              I protect you from the "what ifs," so you can focus on your craft.
            </Slogan>
          </Hero>
          <Philosophy />
          <DivWrapper>
            <Button onClick={() => this.setState({ toggleOption: "option1" })}>
              Services Option 1
            </Button>
            <Button onClick={() => this.setState({ toggleOption: "option2" })}>
              Services Option 2
            </Button>
          </DivWrapper>
          {this.state.toggleOption === "option1" && (
            <>
              <Note>
                Note to Monica: Option 1: introduce scenarios/concerns that your
                clients may encounter. Allows you to target your ideal client by
                offering specific questions.
              </Note>
              <DivWrapper>
                <TriangleBottomLeft />
                <TriangleBottomLeft />
                <Headings>What if?</Headings>
                <TriangleTopRight />
                <TriangleTopRight />
              </DivWrapper>
              <Info>
                A good contract should provide you with a sense of safety.....
                <DivWrapper question>
                  <Question>
                    <TriangleRight />
                    What if I'm sued?
                  </Question>
                  <Question>
                    <TriangleRight />
                    What if my client refuses to pay?
                  </Question>
                  <Question>
                    <TriangleRight />
                    What if my client modifies my art?
                  </Question>
                  <Question>
                    <TriangleRight />
                    What if someone else takes credit for my work?
                  </Question>
                  <br />
                  <br />
                </DivWrapper>
                <Button>
                  <Link to="/services">Available Services</Link>
                </Button>
              </Info>
            </>
          )}
          {this.state.toggleOption === "option2" && (
            <>
              <Note>
                Note to Monica: Option 2: Display icons with general service
                description or brief explanation of what you offer.
              </Note>
              <DivWrapper>
                <TriangleBottomLeft />
                <TriangleBottomLeft />
                <Headings>How I Can Help</Headings>
                <TriangleTopRight />
                <TriangleTopRight />
              </DivWrapper>
              <DivWrapper>
                <Icons>Family Mediation</Icons>
                <Icons>Freelance Contracts</Icons>
                <Icons>Contract Review</Icons>
              </DivWrapper>
              I offer services for freelancers and creatives.{" "}
              <a href="/services">See more</a>.
            </>
          )}
          <Consultation />
          <Note>
            Note to Monica: Click link to create a free{" "}
            <a target="_blank" href="https://calendly.com/pages/pricing">
              calendly account.
            </a>
            It's a convenient way to book appointments.
          </Note>
          <Questions />
        </Container>
        <Footer />
      </>
    );
  }
}
