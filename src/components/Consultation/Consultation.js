import React from "react";
import styled from "styled-components";
import {
  DivWrapper,
  Headings,
  Button,
} from "../PageFeatures/PageFeatures.styled";
import { Pentagon } from "../Dividers/Dividers.styled";

const Target = styled.a`
  text-decoration: none;
  color: darkgreen;
  &:focus {
    color: white;
  }
  &:visited {
    color: darkgreen;
  }
`;
export default function Consultation() {
  return (
    <>
      <DivWrapper>
        <Pentagon />
        <Headings>Consult With Me</Headings>
        <Pentagon />
      </DivWrapper>
      <p>
        Schedule a 30-minute appointment to discuss your contract needs and
        fees.
      </p>
      <Button>
        <Target target="_blank" href="https://calendly.com/pages/pricing">
          Book an Appointment
        </Target>
      </Button>
    </>
  );
}
