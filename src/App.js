import React from "react";
import styled from "styled-components";
import HomePage from "../src/routes/HomePage/HomePage";
import NavBar from "../src/components/NavBar/NavBar";

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <HomePage />
    </Container>
  );
}

export default App;
