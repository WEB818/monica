import React from "react";

import {
  DivWrapper,
  Headings,
  Info,
} from "../PageFeatures/PageFeatures.styled";
import { Diamond } from "../Dividers/Dividers.styled";

export default function Philosophy() {
  return (
    <>
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
        I believe that everyone should have a safety net. Often, artists and
        freelancers leave themselves open to vulnerabilities. That's where I fit
        in. I have vast experience in preparing documents that will provide you
        with that saftey net.
        <br />
        <br />
        Everyone has a strong suit - expertise they bring to the table. It's
        impossible to focus on all the things that could go wrong while playing
        your strongest hand. I protect you from the "what ifs," so you can focus
        on your craft.
      </Info>
    </>
  );
}
