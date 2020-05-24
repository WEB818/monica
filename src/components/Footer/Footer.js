import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: pink;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

// Monica Gutierrez, (certifications)
// Disclaimers:

// (c) 2020 by Monica Gutierrez
