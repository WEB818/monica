import React from "react";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Logo,
  Hero,
  Slogan,
  Headings,
} from "../../components/PageFeatures/PageFeatures.styled";

export default function Services() {
  return (
    <>
      <Container>
        <Hero services>
          <Logo />
          <Slogan services>
            I serve my clients first and always. I start by listening to their
            concerns.
          </Slogan>
        </Hero>
        <Headings>My Services</Headings>
      </Container>
      <Footer />
    </>
  );
}
