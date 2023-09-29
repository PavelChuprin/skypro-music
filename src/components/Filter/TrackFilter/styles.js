import { styled } from "styled-components";

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  justify-content: space-between;
`;

export const BlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
  ${(props) =>
    props.$active &&
    `
    color: #b672ff;
    border: 1px solid #b672ff;
    `}
`;

export const PositionPopup = styled.div`
  position: relative;
`;

export const FilterCount = styled.div`
  width: 24px;
  height: 24px;
  background: -webkit-linear-gradient(-45deg, #ad61ff, #d9b6ff);
  border-radius: 50%;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -9px;
  color: white;
  display: flex;
  justify-content: center;
`;

export const CloseSvg = styled.svg`
  margin-left: 12px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
