import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  width: 70%;
  &:focus {
    outline: 1px dotted #07b387;
  }
`;

export const Text = styled.textarea`
  height: 200px;
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  &:focus {
    outline: 1px dotted #07b387;
  }
`;
