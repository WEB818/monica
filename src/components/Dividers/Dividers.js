import styled from "styled-components";

export const Diamond = styled.div`
  width: 10px;
  height: 10px;
  background-color: black;
  transform: rotate(45deg);
  margin: 3px;
`;

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
`;

export const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid red;
  border-bottom: 50px solid transparent;
`;

export const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
`;

export const TriangleTopLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid transparent;
`;

export const TriangleTopRight = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
`;

export const TriangleBottomLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
`;

export const TriangleBottomRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
`;
