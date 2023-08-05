import { styled } from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  margin: 24px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  & input {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    font-size: 18px;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 278px;
  height: 52px;
  padding: 0 50px;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border: none;
  border-radius: 6px;
  background-color: #580ea2;
`;

export const Link = styled.a`
  font-size: 18px;
  color: white;
  text-decoration: underline;
`;
