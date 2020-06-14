import React from "react";
import {
  DivWrapper,
  Headings,
  Info,
} from "../PageFeatures/PageFeatures.styled";
import { TriangleDown, TriangleUp } from "../Dividers/Dividers.styled";

export default function Questions() {
  return (
    <>
      <DivWrapper left>
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
        <TriangleDown />
      </DivWrapper>
      <Headings>Questions?</Headings>
      <DivWrapper right>
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
        <TriangleUp />
      </DivWrapper>
      <Info>
        Review my commonly asked <a href="/faq">questions</a> or{" "}
        <a href="/contact">contact me</a> directly.
      </Info>
    </>
  );
}
