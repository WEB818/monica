import React, { Component } from "react";
import styled from "styled-components";
// import {
//   TriangleLeft,
//   TriangleRight,
// } from "../../components/Dividers/Dividers.styled";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin: 20px;
`;

const Testimonial = styled.div`
  width: 200px;
  padding: 30px;
  background-color: black;
  color: white;
`;
const ReviewerInfo = styled.div`
  background-color: gray;
  color: white;
`;

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-right: 20px solid lightgreen;
  border-bottom: 20px solid transparent;
  margin-right: 20px;
`;

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-left: 20px solid lightgreen;
  border-bottom: 20px solid transparent;
  margin-left: 20px;
`;

export default class Testimonials extends Component {
  state = {
    featured: 1,
  };
  render() {
    const { featured } = this.state;
    return (
      <Container>
        {featured > 1 && (
          <TriangleLeft
            onClick={() => this.setState({ featured: this.state.featured - 1 })}
          />
        )}

        {featured === 1 && (
          <ReviewWrapper>
            <Testimonial>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              euismod quis viverra nibh cras pulvinar mattis nunc sed.
              Consectetur adipiscing.
            </Testimonial>
            <ReviewerInfo>
              <p>Jane Doe</p>
              <p>Photographer</p>
            </ReviewerInfo>
          </ReviewWrapper>
        )}
        {featured === 2 && (
          <ReviewWrapper>
            <Testimonial>Lorem ipsum different. Testimonial 2.</Testimonial>
            <ReviewerInfo>
              <p>John Doe</p>
              <p>Freelancer</p>
            </ReviewerInfo>
          </ReviewWrapper>
        )}
        {featured === 3 && (
          <ReviewWrapper>
            <Testimonial>Lorem ipsum different. Testimonial 3.</Testimonial>
            <ReviewerInfo>
              <p>Other Person</p>
              <p>Artist</p>
            </ReviewerInfo>
          </ReviewWrapper>
        )}

        {featured < 3 && (
          <TriangleRight
            onClick={() => this.setState({ featured: this.state.featured + 1 })}
          />
        )}
      </Container>
    );
  }
}
