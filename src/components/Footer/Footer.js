import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: lightgreen;

  width: 100vw;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>Monica Gutierrez, (certifications)</div>
      <div>(c) 2020 by Monica Gutierrez</div>
    </StyledFooter>
  );
}
