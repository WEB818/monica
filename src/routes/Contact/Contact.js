import React from "react";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Hero,
  Logo,
  Slogan,
  Headings,
} from "../../components/PageFeatures/PageFeatures.styled";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function Contact() {
  return (
    <>
      <Container>
        <Hero contact>
          <Logo />
          <Slogan contact>No question is irrelevant.</Slogan>
        </Hero>
        <Headings>Contact Me</Headings>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}
