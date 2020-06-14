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
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid black;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid black;
`;

export const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 12px solid lightgreen;
  border-bottom: 8px solid transparent;
  margin-left: 10px;
  margin-top: 3px;
`;

export const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 12px solid lightgreen;
  border-bottom: 8px solid transparent;
  margin-right: 10px;
  margin-top: 3px;
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
  border-top: 10px solid black;
  border-left: 10px solid transparent;
  margin: 3px;
`;

export const TriangleBottomLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid black;
  border-right: 10px solid transparent;
  margin: 3px;
`;

export const TriangleBottomRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
`;

export const Pentagon = styled.div`
  position: relative;
  width: 13px;
  box-sizing: content-box;
  border-width: 12px 4px 0;
  border-style: solid;
  border-color: black transparent;

  &::before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -20px;
    left: -4px;
    border-width: 0 11px 8px;
    border-style: solid;
    border-color: transparent transparent black;
  }
`;
