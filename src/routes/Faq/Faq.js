import React from "react";
import FaqItem from "../../components/FaqItem/FaqItem";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Hero,
  Logo,
  Slogan,
  Headings,
} from "../../components/PageFeatures/PageFeatures.styled";

export default function Faq() {
  return (
    <>
      <Container>
        <Hero faq>
          <Logo />
          <Slogan faq>
            Uncertainty breeds anxiety. I've got answers for you.
          </Slogan>
        </Hero>
        <Headings>Frequently Asked Questions</Headings>
        <FaqItem />
      </Container>
      <Footer />
    </>
  );
}
