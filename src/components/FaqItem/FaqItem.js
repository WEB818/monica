import React, { Component } from "react";
import { faqList } from "../FaqItems/FaqItems";
import { Question, Answer } from "./FaqItem.styled";
import {
  Container,
  Info,
  DivWrapper,
} from "../../components/PageFeatures/PageFeatures.styled";
import { TriangleRight } from "../Dividers/Dividers.styled";

export default class FaqItem extends Component {
  state = {
    qNum: 0,
    expand: false,
  };

  handleExpansionToggle = (num) => {
    this.setState((prevState) => ({ qNum: num, expand: !prevState.expand }));
  };
  render() {
    const { qNum, expand } = this.state;
    return (
      <Container>
        <Info>
          <DivWrapper question>
            {faqList.map((q, idx) => (
              <DivWrapper key={idx} question>
                <DivWrapper>
                  <TriangleRight />
                  <Question onClick={() => this.handleExpansionToggle(q.num)}>
                    {q.q}
                  </Question>
                </DivWrapper>
                {expand && <Answer>{q.a}</Answer>}
              </DivWrapper>
            ))}
          </DivWrapper>
        </Info>
      </Container>
    );
  }
}
