import { styled } from "styled-components";

export const FilterUlYear = styled.ul`
  position: absolute;
  width: 248px;
  height: auto;
  background-color: #313131;
  padding: 34px;
  border-radius: 12px;
  overflow: auto;
  top: 30px;
  right: -100px;
  &::-webkit-scrollbar {
    width: 48px;
  }
  &::-webkit-scrollbar-track {
    background: #4b4949;
    border-left: 22px solid #313131;
    border-right: 22px solid #313131;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-left: 22px solid #313131;
    border-right: 22px solid #313131;
  }
  &::-webkit-scrollbar-button {
    background-color: #313131;
    border-radius: 24px;
  }
`;

export const FilterLi = styled.li`
  font-family: "StratosSkyeng", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding-bottom: 24px;
  &:hover {
    cursor: pointer;
    color: #b672ff;
    text-decoration: underline;
  }
`;
