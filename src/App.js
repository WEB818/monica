import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../src/components/NavBar/NavBar";

import HomePage from "../src/routes/HomePage/HomePage";
import Faq from "./routes/Faq/Faq";
import Services from "../src/routes/Services/Services";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/faq"} component={Faq} />
        <Route path={"/services"} component={Services} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
      </Switch>
    </Container>
  );
}

export default App;
