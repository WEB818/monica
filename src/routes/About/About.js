import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Hero,
  Logo,
  Slogan,
  Headings,
} from "../../components/PageFeatures/PageFeatures.styled";
import Testimonials from "../../components/Testimonials/Testimonials";
const Info = styled.div`
  padding: 10px;
`;

export default function About() {
  return (
    <>
      <Container>
        <Hero about>
          <Logo />
          <Slogan about>
            I found my passion for empowering others. And I live for it daily.
          </Slogan>
        </Hero>
        <Headings>A little about me</Headings>
        <Info>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
          dictum varius duis at. Id ornare arcu odio ut sem nulla pharetra.
          Pellentesque elit eget gravida cum sociis natoque. Ut ornare lectus
          sit amet est placerat. Amet mauris commodo quis imperdiet massa
          tincidunt nunc. Netus et malesuada fames ac turpis egestas.
          Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
          consectetur. Malesuada fames ac turpis egestas. Placerat orci nulla
          pellentesque dignissim enim sit amet. Ut tellus elementum sagittis
          vitae et.
        </Info>
        <Headings>Testimonials</Headings>
        <Testimonials></Testimonials>
      </Container>
      <Footer />
    </>
  );
}
